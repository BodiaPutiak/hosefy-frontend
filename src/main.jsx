import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './styles';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
