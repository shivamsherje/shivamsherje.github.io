import React from "react";
import "./Techtools.css";
import postman from "../../Assets/images/postman.png"
import javascript from "../../Assets/images/json.png";
import css from "../../Assets/images/npm.png";
import react from "../../Assets/images/vercel.jfif";
import redux from "../../Assets/images/github.png";
import git from "../../Assets/images/git.png";
import netlify from "../../Assets/images/netlify-logo-png-transparent.png";
export const Techtools = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2
          style={{ color: "#2ECBE9", fontSize: "40px" }}
          className="section__title different"
        >
          Tools
        </h2>

        <div className="techsection">
          <div>
            {/* <SiJavascript  /> */}
            <img style={{ width: "70px", height: "70px" }} src={javascript} />
            <h5
              className="techname"
              style={{ color: "yellowgreen", fontSize: "19px" }}
            >
              JSON Server
            </h5>
          </div>
        
          <div>
            {/* <DiCss3 /> */}
            <img style={{ width: "70px", height: "70px" }} src={css} />

            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>NPM</h5>
          </div>
          <div>
            <img style={{ width: "70px", height: "70px" }} src={react} />

            {/* <FaReact /> */}
            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>Vercel</h5>
          </div>
        
          <div>
            {/* <SiRedux /> */}
            <img style={{ width: "70px", height: "70px" }} src={redux} />

            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>Github</h5>
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
            {/* <SiNetlify /> */}
            <img style={{ width: "70px", height: "70px" }} src={postman} />

            <h5 style={{ color: "yellowgreen", fontSize: "19px" }}>Netlify</h5>
          </div>
        
        </div>
      </div>
    </>
  );
};
