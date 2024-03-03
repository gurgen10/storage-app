import { useEffect, useState  } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainRoutes  from '../../routes';
import './App.css';
import { ThemeContext } from '../../context';


function App() {
  const [theme, setTheme] = useState("light");
  const themeDefault = { theme, setTheme};
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  useEffect(() => {
    const storageTheme = localStorage.getItem('theme');
    
    if (storageTheme) {
     setTheme(storageTheme);
    }

  },[])


  useEffect(() => {
     setToggleDarkMode(theme === 'light');

  }, [theme])

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'light' : 'dark', // handle the dark mode state on toggle
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#131052',

      },
    },
  });

  return (
    <ThemeContext.Provider value={themeDefault}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <MainRoutes />
        </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
