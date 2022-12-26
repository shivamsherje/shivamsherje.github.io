import React from "react";
import "./Projects.css";
import nordstrom from "../../Assets/images/Nordstrom.png";
import pluralsight from "../../Assets/images/Pluralsight.png";
import bluefly from "../../Assets/images/Bluefly.png";
import bluefly2 from "../../Assets/images/Bluefly-2.png";
import gymwolf from "../../Assets/images/Gymwolf.png";
import { FaReact, FaHardHat } from "react-icons/fa";

import {
  SiChakraui,
  SiHtml5,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
} from "react-icons/si";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 style={{color:"#128FC8"}}  className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={nordstrom} alt=" nordstrom" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{color:"yellowgreen"}}>  Mailchimp Clone</h2>
              <p>
               Mailchimp is a platform that offers marketing and sales tools
                for growing your businesses.
                <p
                  style={{
                    color: " #8F8F8F",
                    marginTop: "30px",
                    marginBottom: "-10px",
                  }}
                >
                  Tech Stack
                </p>
              </p>

              <div>
                {/* < SiMongodb /> */}
                {/* <SiExpress /> */}
                <SiHtml5 />
                <SiCss3 />
                <FaReact />
                {/* <SiNodedotjs /> */}
                <SiJavascript />
                <SiChakraui />
                
              </div>
              <div>
                <a
                  href="https://rad-semolina-cd66f1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button"  style={{color:"#2ECBE9"}} className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivamsherje/delightful-animal-1301"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button"  style={{color:"#2ECBE9"}} className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={pluralsight} alt="pluralsight" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{color:"yellowgreen"}}>Bewakoof Clone</h2>
              <p>
                Bewakoof is an Online Shopping site for Men and Women Clothing.
                Shop from a wide range of T-shirts, Mobile Covers, Accessories.
                <p
                  style={{
                    color: " #8F8F8F",
                    marginTop: "30px",
                    marginBottom: "-10px",
                  }}
                >
                  Tech Stack
                </p>
              </p>

              <div>
                <FaReact />
                <SiJavascript />
                <SiHtml5 />
                <SiCss3 />
              </div>
              <div>
                <a
                  href="https://thriving-mochi-1e7141.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button"  style={{color:"#2ECBE9"}} className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivamsherje/soft-jelly-7030"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button"  style={{color:"#2ECBE9"}} className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={bluefly} alt="bluefly" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{fontSize:"30px", color:"yellowgreen"}}> Anthropologie Clone</h2>
              <p>
                Anthropologie is a shopping website for clothing, jewelry,
                home furniture, decoration, beauty products,gifts and more.
                <p
                  style={{
                    color: " #8F8F8F",
                    marginTop: "15px",
                    marginBottom: "-5px",
                  }}
                >
                  Tech Stack
                </p>
              </p>
              <div>
                {/* <FaReact /> */}
                <SiJavascript />
                {/* <SiChakraui /> */}
                <SiHtml5 />
                <SiCss3 />
              </div>
              <div>
                <a
                  href="https://admirable-lamington-2add4d.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button"  style={{color:"#2ECBE9"}} className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivamsherje/knowledgeable-sea-5909"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button"  style={{color:"#2ECBE9"}} className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={gymwolf} alt="gymwolf" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{color:"yellowgreen"}}>Dot and Key Clone</h2>
              <p>
              Dot and Key is an Indian Skincare brand has a wide
              range of products ranging from face washes to serums.
                <p
                  style={{
                    color: " #8F8F8F",
                    marginTop: "20px",
                    marginBottom: "-5px",
                  }}
                >
                  Tech Stack
                </p>
              </p>
              <div>
                <FaReact />
                <SiJavascript />
                {/* <SiChakraui /> */}
                <SiHtml5 />
                <SiCss3 />
              </div>
              <div>
                <a
                  href="https://github.com/shivamsherje/remarkable-border-1662"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button"  style={{color:"#2ECBE9"}} className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://silver-cactus-19ac85.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button"  style={{color:"#2ECBE9"}} className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
