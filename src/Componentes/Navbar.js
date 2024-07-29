import React, { useContext } from 'react';
import { ThemeContext } from '../Context/Context';
import './Navbar.css';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h1>Mi Aplicación</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </nav>
  );
};

export default Navbar;
