import React from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

const themes = {
  light: 'public/style/light.css',
  dark: 'public/style/dark.css',
};

const App = () => {
  return (
    <ThemeSwitcherProvider defaultTheme="dark" themeMap={themes}>
      <h1>Hello reddit</h1>
    </ThemeSwitcherProvider>
  );
};

export default App