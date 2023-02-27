import React from 'react'
import Main from './Main'
import NavBar from './NavBar'
import SideBar from './SideBar'


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

  /*
  <div class="container">
   <header>Header</header>
   <main>
      <aside>Sidebar Content</aside>
      <article>
        
         <div class="content">
         </div>
         
      </article>
   </main>
</div>



.container {
  display: flex;
  flex-direction: column;
  height: 100%;

  main-body {
    // Styles as a child element of container
    overflow: hidden;
    height : 100%;

    // Styles as a parent of aside and article
    display: flex;
    
    aside {
      // width: 200px;
      // flex-basis: 200px;
      flex: 0 0 200px;
      // display: none;
    }

    article {
      display: flex;
      flex-direction: column;
    }
  }
}

 */
}

export default Home
