import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";


 const Header = () => {
  // const [{ themename }] = React.useContext(ThemeContext);

  return (
   
      <div style={{ backgroundColor:"#128FC8"}} className="header">
        
        <h3 style={{ backgroundColor:"#128FC8"}} className="namemy">
          <a style={{ backgroundColor:"#128FC8"}} href="#home" className="link">
          Shivam
          </a>
        </h3>
        <Navbar />
    
      </div>
 
  );
};

export default Header
