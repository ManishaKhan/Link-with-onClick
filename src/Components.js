import React from 'react';
import {Link} from "react-router-dom"

export const Components = () => {

    const handleLink=(msg)=>{
        
        console.log(msg)
        alert("welcome to the about page");
    }

  return (
    <div>
        <Link to="/" style={{color:"red", margin:"20px"}} onClick={()=>alert("welcome to Home page")}>Home</Link>{" "}

        <Link to="/about" style={{color:"green", margin:"20px"}} onClick={()=>handleLink("It is the About page")}>About</Link>{" "}

        
    </div>
  )
}
