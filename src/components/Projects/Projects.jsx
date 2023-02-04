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
                <img src={sportsline} alt="bluefly" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{ fontSize: "30px", color: "yellowgreen" }}>
                {" "}
                SportsLine Clone
              </h2>
              <p style={{ fontSize: "19px" }}>
                The SportsLine Inc operates as a specialty apparel store. The
                Company offers sandals, boots, shoes, socks, shirts, shorts,
                pants, jackets, hats, gloves, bags, sunglasses, and shoe care
                products.
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
              <div>
                {/* <FaReact /> */}
                {/* <SiJavascript /> */}
                {/* <SiChakraui /> */}
                {/* <SiHtml5 /> */}
                {/* <SiCss3 /> */}

                <img style={{ width: "50px", height: "50px" }} src={html} />
                <img style={{ width: "50px", height: "50px" }} src={css} />
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={javascript}
                />
                <img style={{ width: "50px", height: "50px" }} src={react} />
                <img style={{ width: "50px", height: "50px" }} src={chakraui} />


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
                for growing your businesses.
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

              <div>
                {/* < SiMongodb /> */}
                {/* <SiExpress /> */}
                {/* <SiHtml5 /> */}
                <img style={{ width: "50px", height: "50px" }} src={html} />
                <img style={{ width: "50px", height: "50px" }} src={css} />
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={javascript}
                />
                <img style={{ width: "50px", height: "50px" }} src={react} />
                <img style={{ width: "50px", height: "50px" }} src={chakraui} />

                {/* <SiCss3 /> */}
                {/* <FaReact /> */}
                {/* <SiNodedotjs /> */}

                {/* <SiJavascript />
                <SiChakraui />
                 */}
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
                <img src={pluralsight} alt="pluralsight" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{ color: "yellowgreen" }}>Bewakoof Clone</h2>
              <p style={{ fontSize: "19px" }}>
                Bewakoof is an Online Shopping site for Men and Women Clothing.
                Shop from a wide range of T-shirts, Mobile Covers, Accessories.
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

              <div>
                {/* <FaReact />
                <SiJavascript />
                <SiHtml5 />
                <SiCss3 /> */}

                <img style={{ width: "50px", height: "50px" }} src={html} />
                <img style={{ width: "50px", height: "50px" }} src={css} />
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={javascript}
                />
                <img style={{ width: "50px", height: "50px" }} src={react} />
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
                furniture, decoration, beauty products,gifts and more.
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
              <div>
                {/* <FaReact /> */}
                {/* <SiJavascript /> */}
                {/* <SiChakraui /> */}
                {/* <SiHtml5 /> */}
                {/* <SiCss3 /> */}

                <img style={{ width: "50px", height: "50px" }} src={html} />
                <img style={{ width: "50px", height: "50px" }} src={css} />
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={javascript}
                />
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
                <img src={gymwolf} alt="gymwolf" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{ color: "yellowgreen" }}>Dot and Key Clone</h2>
              <p style={{ fontSize: "19px" }}>
                Dot and Key is an Indian Skincare brand has a wide range of
                products ranging from face washes to serums.
                <p
                  style={{
                    color: " #8F8F8F",
                    marginTop: "20px",
                    fontSize: "19px",
                  }}
                >
                  Tech Stack
                </p>
              </p>
              <div>
                {/* <FaReact /> */}
                {/* <SiJavascript /> */}
                {/* <SiChakraui /> */}
                {/* <SiHtml5 /> */}
                {/* <SiCss3 /> */}

                <img style={{ width: "50px", height: "50px" }} src={html} />
                <img style={{ width: "50px", height: "50px" }} src={css} />
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={javascript}
                />
                <img style={{ width: "50px", height: "50px" }} src={react} />
              </div>
              <div>
                <a
                  href="https://github.com/shivamsherje/remarkable-border-1662"
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
                  href="https://silver-cactus-19ac85.netlify.app/"
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
