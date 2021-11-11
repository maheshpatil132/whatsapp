import React from 'react'
import './style.css'
import mahesh from './mahesh.jpg'
const Header = () => {
    return (
        <>
        <header className="header">
            <div className="logo">
            <img src={mahesh} />
          <h1>Name</h1>
            </div>
            <div className="icons">
            <i class="fal fa-search"></i>
            <i class="far fa-ellipsis-v"></i>
            </div>
      </header>  
        </>
    )
}

export default Header
