/* eslint-env node */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import connectDB from './db.js'; 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.JWT_SECRET || 'ThisismysecretkeyAayushPathak';

// Connect to MongoDB
let db;
connectDB()
  .then(database => {
    db = database; 
  })
  .catch(err => console.error("Database connection error:", err));

app.use(cors());
app.use(bodyParser.json());

app.post('/api/register', async (req, res) => {
    const { name, email, password, year, college, section, rollNo } = req.body;

  
    const existingUser  = await db.collection('users').findOne({ email });
    if (existingUser ) {
        return res.status(400).json({ message: 'User  already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser  = { name, email, password: hashedPassword, year, college, section, rollNo };

    await db.collection('users').insertOne(newUser );
    res.status(201).json({ message: 'Registered successfully' });
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await db.collection('users').findOne({ email });

    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: user.email, name: user.name }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ 
        message: 'Login successful', 
        token, 
        user: { 
            name: user.name, 
            email: user.email, 
            year: user.year, 
            college: user.college, 
            section: user.section, 
            rollNo: user.rollNo 
        } 
    });
});

app.get('/api/profile', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await db.collection('users').findOne({ email: decoded.email });
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }

        res.status(200).json({ 
            name: user.name, 
            email: user.email, 
            year: user.year, 
            college: user.college, 
            section: user.section, 
            rollNo: user.rollNo 
        });
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));