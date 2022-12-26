import React from "react";
import "./Introduction.css";
import om from "../../Assets/images/Om.jpg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 style={{color:"#128FC8"}} className="section__title">
            About Me
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={om} alt="Images" />
            </div>
            <div  style={{  textAlign: "justify", fontWeight:"lighter", marginRight:"10px"}} className="introduction_datacontainer">
              <p >
                Hi, I am <span className="different">Shivam Sherje </span> from{" "}
                <span className="different">Nagpur, Maharashtra</span>. <br/>I am a
                Full-Stack Web Developer from India with a Mechanical
                Engineering degree. I enjoy creating scalable web applications
                and am constantly interested in learning new technologies. Using
                Javascript, React , CSS , HTML , I created clones of a few
                websites. I have developed excellent problem-solving skills that
                are required to solve complex problems because I am eager to
                learn and apply my abilities on a large scale. I have also
                solved maths problems to solve software engineering problems.
                Looking for a role as web developer and hoping to contribute to
                the growth of an organisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
