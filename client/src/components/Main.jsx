import React from 'react'
import SideBar from './SideBar'

const Main = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
      <div className="main">
        <div className="card">
          <h3>Card 1</h3>
          <p>This is the content of Card 1.</p>
        </div>
        <div className="card">
          <h3>Card 2</h3>
          <p>This is the content of Card 2.</p>
        </div>
        <div className="card">
          <h3>Card 3</h3>
          <p>This is the content of Card 3.</p>
        </div>
        <div className="card">
          <h3>Card 1</h3>
          <p>This is the content of Card 1.</p>
        </div>
        <div className="card">
          <h3>Card 2</h3>
          <p>This is the content of Card 2.</p>
        </div>
        <div className="card">
          <h3>Card 3</h3>
          <p>This is the content of Card 3.</p>
        </div>
      </div>
    </div>
  )

    {/* <div className='main'>
      <SideBar/>
      <div className='mainBody'>

      </div>
    </div> */}
    

}

export default Main
