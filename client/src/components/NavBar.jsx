import React from 'react'
import { Link } from "react-router-dom";
import { useThemeSwitcher } from 'react-css-theme-switcher';
import Loader from './Loader'


const NavBar = () => {
    const { switcher, themes, currentTheme, status } = useThemeSwitcher();
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const logoWhite="Reddit_Lockup_OnWhite.png"
    const logoDark="Reddit_Lockup_OnDark.png"

    if (status === 'loading') {
      return <Loader/>;
    }
  
    const toggleDarkMode = () => {
      setIsDarkMode(previous => {
        switcher({ theme: previous ?  themes.light : themes.dark});
        return !previous;
      });
    };
  
  
  return (
    <nav className="navbar" >
      <div className="navbar-left">
        <Link to={'/'}>
          <img src={isDarkMode ? `./images/${logoDark}` : `./images/${logoWhite}`} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to={'login'}> 
        <button className="button login-button">
          Log In
        </button>
        </Link>
        {/* <Link to={'signup'}> 
        <button className="button signup-button">
          Sign Up
        </button>
        </Link> */}
        <button className="button theme-switch-button" onClick={toggleDarkMode}>
          {currentTheme}
        </button> 
      </div>
    </nav>
  )
}

export default NavBar


