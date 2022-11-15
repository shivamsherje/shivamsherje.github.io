import React from "react";
import "./Projects.css";
import nordstrom from "../../Assets/images/Nordstrom.png";
import pluralsight from "../../Assets/images/Pluralsight.png";
import bluefly from "../../Assets/images/Bluefly.png"
import bluefly2 from "../../Assets/images/Bluefly-2.png"
import gymwolf from "../../Assets/images/Gymwolf.png"
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
      <div className="section" >
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={nordstrom}
                  alt=" nordstrom"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Nordstrom Clone</h2>
              <p>
                Nordstrom, Inc. is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids.

                <p style={{ color: " #80618c", marginTop: "30px", marginBottom: "-10px" }}>Tech Stack</p>

              </p>

              <div>
                < SiMongodb />
                <SiExpress />
                <FaReact />
                < SiNodedotjs />
                <SiJavascript />
                <SiChakraui />
                <SiHtml5 />
                <SiCss3 />


              </div>
              <div>
                <a
                  href="https://fusion-strom.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shubhamksingh/sole-wing-9343"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
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
                <img
                  src={pluralsight}
                  alt="pluralsight"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Pluralsight Clone</h2>
              <p>
                Pluralsight is an Ed-tech website, It provides video courses for corporate professionals.

                <p style={{ color: " #80618c", marginTop: "30px", marginBottom: "-10px" }}>Tech Stack</p>

              </p>

              <div>
                <SiJavascript />
                <SiHtml5 />
                <SiCss3 />
              </div>
              <div>
                <a
                  href="https://dulcet-brigadeiros-75a972.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Omgupta12/PluralSight-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
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
                <img
                  src={bluefly}
                  alt="bluefly"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Bluefly Clone</h2>
              <p>
                Bluefly offers an e-commerce platform that sells designerapparel and accessories, household products and accessories atdiscounted prices.

                <p style={{ color: " #80618c", marginTop: "15px", marginBottom: "-5px" }}>Tech Stack</p>
              </p>
              <div>
                <FaReact />
                <SiJavascript />
                <SiChakraui />
                <SiHtml5 />
                <SiCss3 />
              </div>
              <div>
                <a
                  href="https://bluefy-clone.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Omgupta12/Bluefly-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
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
                <img
                  src={gymwolf}
                  alt="gymwolf"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Gymwolf Clone</h2>
              <p>
                Gymwolf is a workout tracking tool. Add workouts, create our own customized workout plans or find suitable plan. Accomplish our goals with motivation from personal trainer and committed training.

                <p style={{ color: " #80618c", marginTop: "20px", marginBottom: "-5px" }}>Tech Stack</p>
              </p>
              <div>
                <FaReact />
                <SiJavascript />
                <SiChakraui />
                <SiHtml5 />
                <SiCss3 />
              </div>
              <div>
                <a
                  href="https://can-table-5382-omgupta12.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Omgupta12/Gymwolf-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
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
