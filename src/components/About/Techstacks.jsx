import React from "react";
import "./Techstacks.css";
// import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiPostman,
  SiChakraui,
} from "react-icons/si";

import javascript from "../../Assets/images/javascript.png";
import css from "../../Assets/images/css.png";
import react from "../../Assets/images/react.png";
import chakraui from "../../Assets/images/chakraui.png";
import html from "../../Assets/images/html.png";
import redux from "../../Assets/images/redux.png";
import mongodb from "../../Assets/images/mongodb.svg";
import git from "../../Assets/images/git.png";
import express from "../../Assets/images/express.png";
import netlify from "../../Assets/images/netlify-logo-png-transparent.png";
import nodejs from "../../Assets/images/png-transparent-js-logo-node-logos-and-brands-icon.png";
export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2
          style={{ color: "#2ECBE9", fontSize: "40px" }}
          className="section__title different"
        >
          Tech Stack & Tools
        </h2>

        <div className="techsection">
          <div>
            {/* <SiJavascript  /> */}
            <img style={{ width: "70px", height: "70px" }} src={javascript} />
            <h5
              className="techname"
              style={{ color: "yellowgreen", fontSize: "19px" }}
            >
              Javascript
            </h5>
          </div>
          <div>
            {/* <SiHtml5 /> */}
            <img style={{ width: "70px", height: "70px" }} src={html} />

            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>HTML</h5>
          </div>
          <div>
            {/* <DiCss3 /> */}
            <img style={{ width: "70px", height: "70px" }} src={css} />

            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>CSS</h5>
          </div>
          <div>
            <img style={{ width: "70px", height: "70px" }} src={react} />

            {/* <FaReact /> */}
            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>React</h5>
          </div>
          <div>
            {/* <FaNodeJs /> */}
            <img style={{ width: "70px", height: "70px" }} src={nodejs} />

            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>Nodejs</h5>
          </div>
          <div>
            {/* <DiMongodb /> */}
            <img style={{ width: "70px", height: "70px" }} src={mongodb} />

            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>MongoDb</h5>
          </div>

          <div>
            {/* <SiExpress /> */}
            <img style={{ width: "70px", height: "70px" }} src={express} />

            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>Express</h5>
          </div>

          <div>
            {/* <SiRedux /> */}
            <img style={{ width: "70px", height: "70px" }} src={redux} />

            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>Redux</h5>
          </div>

          <div>
            <SiMaterialui />
            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>
              Material Ui
            </h5>
          </div>
          <div>
            {/* <VscGithub /> */}
            <img style={{ width: "70px", height: "70px" }} src={git} />

            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>Git</h5>
          </div>

          <div>
            {/* <SiNetlify /> */}
            <img style={{ width: "70px", height: "70px" }} src={netlify} />

            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>Netlify</h5>
          </div>

          <div>
            <img style={{ width: "70px", height: "70px" }} src={chakraui} />

            {/* <SiChakraui/> */}
            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>Chakraui</h5>
          </div>
        </div>
      </div>
    </>
  );
};
