import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className={"section "}>
        <p style={{ fontSize: "15px", textAlign: "center", color: "#616161" }}>
          sherjes49@gmail.com | +91-7263911096
        </p>
        <br />

        <a
          href="https://github.com/shivamsherje"
          rel="noreferrer"
          target="_blank"
        >
          <p className="footer">Made By :- Shivam Sherje 🌻</p>
        </a>
      </div>
    </>
  );
};
