import React from 'react'

const Content = (props) => {
    console.log("content")
    let message = JSON.parse(localStorage.getItem('message')) 
    console.log(message)
    return (
        <> 
       
        <section className="content">
        {/* {
          message.map((elem,id)=>{
            return(
                <div className="message_box">
                <p className="message">{elem}</p>
            </div>
            )
          })
          
        } */}
        
        
                {/* <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil from surat</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil from surat</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil from surat</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil from surat</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil from surat</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil from surat</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil from surat</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil from surat</p>
                </div>
                <div className="message_box">
                    <p className="message">hello everyone i am mahesh patil</p>
                </div> */}
            </section>
        </>
    )
}

export default Content
