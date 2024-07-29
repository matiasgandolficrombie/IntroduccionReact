import React, { useContext } from 'react';
import './App.css';
import Formulario from './Componentes/Formulario';
import { ThemeContext, ThemeProvider } from './Context/Context';
import Navbar from './Componentes/Navbar';

const App = () => {
  return (
    <ThemeProvider>
      <Navbar/>
      <MainApp />
    </ThemeProvider>
  );
};

const MainApp = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Formulario />
    </div>
  );
};

export default App;
