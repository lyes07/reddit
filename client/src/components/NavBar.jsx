import React from 'react'
import { Link } from "react-router-dom";
import { useThemeSwitcher } from 'react-css-theme-switcher';


const NavBar = () => {
    const { switcher, themes, currentTheme, status } = useThemeSwitcher();
    const [isDarkMode, setIsDarkMode] = React.useState(false);
  
    if (status === 'loading') {
      return <div>Loading styles...</div>;
    }
  
    const toggleDarkMode = () => {
      setIsDarkMode(previous => {
        switcher({ theme: previous ? themes.light : themes.dark });
        return !previous;
      });
    };
  
  
  return (
    <nav className="navbar" >
      <div className="navbar-left">
        Logo
      </div>
      <div className="navbar-right">
        <Link to={'login'}> 
        <button className="button login-button">
          Log In
        </button>
        </Link>
        <Link to={'signup'}> 
        <button className="button signup-button">
          Sign Up
        </button>
        </Link>
        <button className="button theme-switch-button" onClick={toggleDarkMode}>
          {currentTheme}
        </button> 
      </div>
    </nav>
  )
}

export default NavBar


