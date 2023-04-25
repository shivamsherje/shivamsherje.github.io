import React from "react";
import "./About.css";
import { Type } from "./Type";
import { Introduction } from "./Introduction";
import { Techstacks } from "./Techstacks";
import { Techtools } from "./Techtools";
import Resume from "../../Assets/pdf/fw20_0912-Shivam-Sherje-Resume.pdf";
export const About = () => {
  const downloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1kX2R29HLrfiGPsctH7j4LAhke7q_Rv3J/view?usp=share_link"
    );
  };
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          <br />

          <span className="about__hi"> Hi, I am </span>

          <span className="about__name">Shivam Sherje</span>
        </h1>
        <Type />

        <div className="about__contact center"></div>
        <br />
        <a
          className="resume-buttton-of-about"
          href={Resume}
          onClick={downloadResume}
          download="fw20_0912-Shivam-Sherje-Resume"
          target="_blank"
          rel="noreferrer"
        >
          RESUME
        </a>
      </div>
      <Introduction />
      <section id="#skills">
        <br />
        <Techstacks />
      </section>
      <Techtools />
    </>
  );
};
