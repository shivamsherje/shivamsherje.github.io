import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <nav style={{ backgroundColor:"#128FC8"}} className="center_nav">
        <ul 
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item" >
            <a style={{ backgroundColor:"#128FC8"}}
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
            style={{ backgroundColor:"#128FC8"}}
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a
            style={{ backgroundColor:"#128FC8"}}
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
            style={{ backgroundColor:"#128FC8"}}
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
            style={{ backgroundColor:"#128FC8"}}
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            <a 
            style={{ backgroundColor:"#128FC8"}}
              href="https://drive.google.com/file/d/1kX2R29HLrfiGPsctH7j4LAhke7q_Rv3J/view?usp=share_link"
              onClick={toggleNavList}
              className="link link--nav"
              download='resume'
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
        {/* <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button> */}
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
    
      </nav>
    </>
  );
};
