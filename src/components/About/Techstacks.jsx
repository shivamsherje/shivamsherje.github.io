import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiPostman,
  SiChakraui
} from "react-icons/si";

import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";


export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 style={{color:"#128FC8"}}  className="section__title different">Tech Stack & Tools</h2>
        <div className="techsection">
          <div >
            <SiJavascript  />
            <h5 className="techname" style={{color:"yellowgreen"}}>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5 style={{color:"yellowgreen"}}>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5 style={{color:"yellowgreen"}}>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5 style={{color:"yellowgreen"}}>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5 style={{color:"yellowgreen"}}>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5 style={{color:"yellowgreen"}}>MongoDb</h5>
          </div>

          <div>
            <SiExpress />
            <h5 style={{color:"yellowgreen"}}>Express</h5>
          </div>

          <div>
            <SiRedux />
            <h5 style={{color:"yellowgreen"}}>Redux</h5>
          </div>

          <div>
            <SiMaterialui />
            <h5 style={{color:"yellowgreen"}}>Material Ui</h5>
          </div>        
          <div>
            <VscGithub />
            <h5 style={{color:"yellowgreen"}}>Github</h5>
          </div>

          <div>
            <SiNetlify />
            <h5 style={{color:"yellowgreen"}}>Netlify</h5>
          </div>
      
          <div>
            <SiChakraui/>
            <h5 style={{color:"yellowgreen"}}>Chakraui</h5>
          </div>
        </div>
      </div>
    </>
  );
};
