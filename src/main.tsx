import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    {/*ThemeProvider is used to wrap the App component and update the theme accordingly */}
   <ThemeProvider>
    <App />
   </ThemeProvider>
  </React.StrictMode>,
)
