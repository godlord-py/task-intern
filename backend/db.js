import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://aayushpathak2004:8vOf0mhaPIYhTXpQ@cluster0.jfbao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");
    return client.db("yourDatabaseName"); // Replace with your database name
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export default connectDB;