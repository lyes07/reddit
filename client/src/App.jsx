import React,{useState, useEffect} from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import {UserContext} from './context/UserContext'
import Home  from "./routes/Home";
import Login from './routes/Login';
import SignUp from './routes/SignUp';

const themes = {
  light: 'src/style/light.css',
  dark: 'src/style/dark.css',
};

const App = () => {

  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      async function fetchUser(){
          try {
              setLoading(true)
              const response = await  Api.post(`/fetch-user`, null, {
                  withCredentials: true,
                  headers: {
                      'Access-Control-Allow-Origin': '*',
                  },
              })
              setUser(response.data.user)
          } catch (error) {
              console.log(`No user exists with the current session... ${error}`)
          } finally{
              setLoading(false)
          }
      }
      fetchUser()

  }, [])

  return (
    
    <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
      <UserContext.Provider value={{
        user: user,
        setUser : setUser,
        loading : loading,
        setLoading : setLoading
      }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
            {/* <Route path='/topic/*' element={<Home/>} /> */}
          </Routes>
        </BrowserRouter>
      </UserContext.Provider> 
    </ThemeSwitcherProvider>
  );
};

export default App