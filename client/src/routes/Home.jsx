import React from 'react'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'


const Home = () => {
  return (
    <>
      <NavBar/>
      <div className='main-body'>
        <SideBar/>
        <Main/>
      </div>
    </>
  )
}

export default Home
