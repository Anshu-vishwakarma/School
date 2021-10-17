import React from 'react'
import logo from "./logo.png"
const Header = () => {
    return (
        <>
           <div className="header"  style={{justifyContent:"center",textAlign:"center" ,paddingTop:"3vh",backgroundColor:"pink",paddingBottom:"2vh"}}>
               <div>
                 
                   <h1>  <img src={logo} alt="ss"  style={{height:"70px"}}/>Rose Mary Hr. Sec. School</h1></div>
                     <h5>Dwarka Nagar Bhopal</h5>
               
               
               </div> 
        </>
    )
}

export default Header
