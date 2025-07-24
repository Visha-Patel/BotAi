import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import History from './pages/History/History.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {ThemeProvider, createTheme } from '@mui/material';

export const Theme = createTheme({
  typography: {
      body: {
        fontFamily: 'Ubuntu, Open Sans',
      },
      h1: {
      fontFamily: "Ubuntu, sans-serif",
      color:  "#9785BA" ,
      fontSize: 28,
      fontWeight: 700,
      },

      h2: {
      fontFamily: "Ubuntu, sans-serif",
      color: "text.primary",
      fontSize: 28,
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: 22,
        },
     },
   },

   palette: {
    primary: {
       main: 'rgba(151, 133, 186, 1)',
       light: 'rgb(205, 188, 238)',
       white: 'rgba(249, 250, 250, 1)',
       bgColor: "#FAF7FF",
    },

    secondary: {
      main: 'rgba(215, 199, 244, 1)',
      white: 'rgba(255, 255, 255, 1)',
    },

    background: {
      default: 'rgba(215, 199, 244, 0.2)',
      paper: 'rgba(215, 199, 244, 0.13)',
    },

    text: {
      primary: 'rgba(60, 60, 60, 1)',
    }

   },

   components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)', // Setting body background
          color: 'rgba(60, 60, 60, 1)', 
          fontFamily: 'Ubuntu, Open Sans', 
          minheight: '100vh',
          margin: 0, 
          padding: 0, 
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
        contained: {
          backgroundColor: "rgba(215, 199, 244, 1)",
          color: 'rgba(60, 60, 60, 1)',
          fontSize: '20px',
        },
      },
    }
   }

})


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'history',
        element: <History />,
      },
      {
        path: '/',
        element: <Home />,
      },
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      
      <RouterProvider router={router}/>
    </ThemeProvider>
    
  </StrictMode>,
)
