import React from "react";
import "./Projects.css";
import nordstrom from "../../Assets/images/Nordstrom.png";
import pluralsight from "../../Assets/images/Pluralsight.png";
import bluefly from "../../Assets/images/Bluefly.png";
import bluefly2 from "../../Assets/images/Bluefly-2.png";
import gymwolf from "../../Assets/images/Gymwolf.png";
import html from "./html.png";
import css from "./css.png";
import react from "./react.png";
import javascript from "./javascript.png";
import chakraui from "./chakraui.png";
import sportsline from "../../Assets/images/sportsline.png";
import adautoparts from "../../Assets/images/advance-auto-parts.png";
import sendinblue from "../../Assets/images/Screenshot (386).png";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2
          style={{ color: "#2ECBE9", fontSize: "40px" }}
          className="section__title different"
          data-aos="fade-right"
        >
          Projects
        </h2>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={adautoparts} alt=" nordstrom" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{ color: "yellowgreen" }}>
                {" "}
                Advance Auto Parts Clone
              </h2>
              <p style={{ fontSize: "19px" }}>
                Advance Auto Parts offers Quality automotive advice,
                accessories, and parts.Its a collaborative project built by me,
                executed in five days.
                <p
                  style={{
                    color: " #8F8F8F",
                    marginTop: "30px",
                    marginBottom: "-10px",
                    fontSize: "19px",
                    marginBottom: "10px",
                  }}
                >
                  Tech Stack
                </p>
              </p>

              <div style={{ fontSize: "19px", textAlign: "center" }}>
                <p style={{ color: "orange" }}>
                  Node.js , Express.js , MongoDB, React.js, ChakraUI
                </p>
              </div>
              <div>
                <a
                  href="https://advance-auto-parts.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    style={{ color: "#2ECBE9", fontSize: "19px" }}
                    className="btn btn--outline onbt"
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivamsherje/Advance-Auto-Parts-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    style={{ color: "#2ECBE9", fontSize: "19px" }}
                    className="btn btn--outline"
                  >
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
                <img src={sportsline} alt="bluefly" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{ fontSize: "30px", color: "yellowgreen" }}>
                {" "}
                SportsLine Clone
              </h2>
              <p style={{ fontSize: "19px" }}>
                The SportsLine Inc operates as a specialty apparel store. Finish
                Line is an American retail chain that sells athletic shoes and
                related apparel and accessories.Its An individual project built
                by me, executed in five days.
                <p
                  style={{
                    color: " #8F8F8F",
                    marginTop: "15px",
                    // marginBottom: "-5px",
                    fontSize: "19px",
                  }}
                >
                  Tech Stack
                </p>
              </p>
              <div style={{ fontSize: "19px" }}>
                {/* <FaReact /> */}
                {/* <SiJavascript /> */}
                {/* <SiChakraui /> */}
                {/* <SiHtml5 /> */}
                {/* <SiCss3 /> */}

                {/* <img style={{ width: "50px", height: "50px" }} src={html} />
                <img style={{ width: "50px", height: "50px" }} src={css} />
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={javascript}
                />
                <img style={{ width: "50px", height: "50px" }} src={react} />
                <img style={{ width: "50px", height: "50px" }} src={chakraui} /> */}

                <p style={{ color: "orange", textAlign: "center" }}>
                  HTML , CSS , Javascript , React.js , Chakra UI
                </p>
              </div>
              <div>
                <a
                  href="https://statuesque-chickens-777.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    style={{ color: "#2ECBE9", fontSize: "19px" }}
                    className="btn btn--outline onbt"
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivamsherje/statuesque-chickens-777-"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    style={{ color: "#2ECBE9", fontSize: "19px" }}
                    className="btn btn--outline"
                  >
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
                <img src={nordstrom} alt=" nordstrom" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{ color: "yellowgreen" }}> Mailchimp Clone</h2>
              <p style={{ fontSize: "19px" }}>
                Mailchimp is a platform that offers marketing and sales tools
                for growing your businesses.Its a collaborative project built by
                me, executed in five days.
                <p
                  style={{
                    color: " #8F8F8F",
                    marginTop: "30px",
                    marginBottom: "-10px",
                    fontSize: "19px",
                    marginBottom: "10px",
                  }}
                >
                  Tech Stack
                </p>
              </p>

              <div style={{ fontSize: "19px" }}>
                <p style={{ color: "orange", textAlign: "center" }}>
                  HTML , CSS , Javascript , React.js , Chakra UI
                </p>
              </div>
              <div>
                <a
                  href="https://rad-semolina-cd66f1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    style={{ color: "#2ECBE9", fontSize: "19px" }}
                    className="btn btn--outline onbt"
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivamsherje/delightful-animal-1301"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    style={{ color: "#2ECBE9", fontSize: "19px" }}
                    className="btn btn--outline"
                  >
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
              <h2 style={{ fontSize: "30px", color: "yellowgreen" }}>
                {" "}
                Anthropologie Clone
              </h2>
              <p style={{ fontSize: "19px" }}>
                Anthropologie is a shopping website for clothing, jewelry, home
                furniture, decoration, beauty products,gifts and more.Its An
                individual project built by me, executed in five days.
                <p
                  style={{
                    color: " #8F8F8F",
                    marginTop: "15px",
                    // marginBottom: "-5px",
                    fontSize: "19px",
                  }}
                >
                  Tech Stack
                </p>
              </p>

              {/* <FaReact /> */}
              {/* <SiJavascript /> */}
              {/* <SiChakraui /> */}
              {/* <SiHtml5 /> */}
              {/* <SiCss3 /> */}

              <div style={{ fontSize: "19px", textAlign: "center" }}>
                <p style={{ color: "orange" }}>HTML , CSS , Javascript</p>
              </div>
              <div>
                <a
                  href="https://admirable-lamington-2add4d.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    style={{ color: "#2ECBE9", fontSize: "19px" }}
                    className="btn btn--outline onbt"
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivamsherje/knowledgeable-sea-5909"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    style={{ color: "#2ECBE9", fontSize: "19px" }}
                    className="btn btn--outline"
                  >
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
                <img src={sendinblue} alt="pluralsight" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{ color: "yellowgreen" }}>Sendinblue Clone</h2>
              <p style={{ fontSize: "19px" }}>
                Sendinblue is the smartest and most intuitive platform for
                growing businesses.Its a collaborative project built by me,
                executed in five days.
                <p
                  style={{
                    color: " #8F8F8F",
                    marginTop: "30px",
                    // marginBottom: "-10px",
                    fontSize: "19px",
                  }}
                >
                  Tech Stack
                </p>
              </p>

              <div style={{ fontSize: "19px", textAlign: "center" }}>
                <p style={{ color: "orange" }}>HTML , CSS , Javascript</p>
              </div>
              <div>
                <a
                  href="https://poetic-valkyrie-97095f.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    style={{ color: "#2ECBE9", fontSize: "19px" }}
                    className="btn btn--outline onbt"
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivamsherje/SendInBlue-Online-Marketing-Services"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    style={{ color: "#2ECBE9", fontSize: "19px" }}
                    className="btn btn--outline"
                  >
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
              <h2 style={{ color: "yellowgreen" }}>Bewakoof Clone</h2>
              <p style={{ fontSize: "19px" }}>
                Bewakoof is an online retailer offering a variety of t-shirts,
                mobile covers, and accessories for men and women.Its An
                individual project built by me, executed in five days.
                <p
                  style={{
                    color: " #8F8F8F",
                    marginTop: "30px",
                    // marginBottom: "-10px",
                    fontSize: "19px",
                  }}
                >
                  Tech Stack
                </p>
              </p>

              <div style={{ fontSize: "19px" }}>
                <p style={{ color: "orange" }}>
                  HTML , CSS , Javascript , React.js
                </p>
              </div>
              <div>
                <a
                  href="https://thriving-mochi-1e7141.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    style={{ color: "#2ECBE9", fontSize: "19px" }}
                    className="btn btn--outline onbt"
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivamsherje/soft-jelly-7030"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    style={{ color: "#2ECBE9", fontSize: "19px" }}
                    className="btn btn--outline"
                  >
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
