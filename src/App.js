import React, { useEffect } from 'react';
import Navbar from '../src/components/Pages/Navbar/Header';
import DashBoard from '../src/components/Pages/Dashboard/DashBoard';
import { ThemeProvider, createTheme } from '@mui/material/styles';



const theme = createTheme({
  typography: {
    h1: {
      fontSize: '3rem',
    },
  },
  palette: {
    primary: {
      main: '#143988',
      dark: '#143988',
      contrastText: '#fff',
    },
    secondary: {
      light: '#757CE8',
      main: '#3F50B5',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      // setAuthToken(localStorage.token);
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <DashBoard/>
      
    </ThemeProvider>
  );
};

export default App;
  