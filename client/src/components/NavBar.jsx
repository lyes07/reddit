import React from 'react'

const NavBar = () => {
  const buttonStyles = {
    backgroundColor: "#0077ff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    margin: "0 10px",
    cursor: "pointer",
  };
  
  return (
    <nav className="navbar" >
      <div className="navbar-left">
        Logo
      </div>
      <div className="navbar-right">
        <button style={buttonStyles} className="signin-button">
          Sign In
        </button>
        <button style={buttonStyles} className="theme-switch-button">
          Theme Switch
        </button>
      </div>
    </nav>
  )
}

export default NavBar



// Define styles as objects
