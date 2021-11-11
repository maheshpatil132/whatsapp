import React, { useState } from 'react'
const Footer = () => {
    let arr = []
    const send =()=>{
    }
    const [state, setState] = useState([])
    return (
        <>
          <footer className="footer">
              <div className="icons">
              <i class="fal fa-laugh"></i>
              <i class="fas fa-paperclip"></i>
              </div>
              <input type="text"  id="input" />
              <div className="icons">
              <i class="fas fa-microphone"></i>
              <i class="fad fa-paper-plane rotate" onClick={send}></i>
              </div>
              </footer>   
        </>
    )
}

export default Footer
