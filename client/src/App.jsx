import React from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import {UserContext} from './context/UserContext'
import Home  from "./routes/Home";

const themes = {
  light: 'src/style/light.css',
  dark: 'src/style/dark.css',
};

const App = () => {
  return (
    
    <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
      {/* <UserContext.Provider value={{

      }}> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </BrowserRouter>
      {/* </UserContext.Provider> */}
    </ThemeSwitcherProvider>
  );
};

export default App