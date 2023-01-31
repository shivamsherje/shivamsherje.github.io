import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Introduction } from "./Introduction";
import { Techstacks } from "./Techstacks";
import { Techtools } from "./Techtools";
import Resume from "../../Assets/pdf/Shivam_Sherje_Resume.pdf";
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
        <p
          className="about__desc"
          data-aos="fade-right"
          style={{ fontFamily: "'Poppins', sans-serif", textAlign: "justify" }}
        >
          A Full Stack Developer who loves solving problems and building
          projects. I am equipped with a variety of technologies and tools to
          help me build the best possible product.
        </p>
        <div className="about__contact center">
          {/* <a
            href="https://github.com/shivamsherje"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon style={{ width: "40px", height: "40px" }} />
          </a> */}

          {/* <a
            href="mailto:sherjes49@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon style={{ width: "40px", height: "40px" }} />
          </a> */}

          {/* <a
            href="tel:+917263911096"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon style={{ width: "40px", height: "40px" }} />
          </a> */}
          {/* <a
            href="https://www.linkedin.com/in/shivam-sherje-996124138/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon style={{ width: "40px", height: "40px" }} />
          </a> */}
        </div>
        <br />
        <a 
        className="resume-buttton-of-about"
          style={{
            borderRadius:"10px",
            backgroundImage: "linear-gradient(#0dccea, #0d70ea)",
            boxShadow: "rgba(0, 0, 0, .3) 0 5px 15px",
            color: "#fff",
            cursor: "pointer",
            fontSize: "20px",
            padding:"10px"
          }}
          href={Resume}
          onClick={downloadResume}
          download="Shivam_Sherje_Resume"
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
