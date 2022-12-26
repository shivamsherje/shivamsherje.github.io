import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a href="https://github.com/shivamsherje" rel="noreferrer" target="_blank">
          <p className="footer" >Made By :- Shivam Sherje 🌻</p>
        </a>
      </div>
    </>
  );
};
