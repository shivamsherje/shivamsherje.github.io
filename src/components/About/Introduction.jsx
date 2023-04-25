import React from "react";
import "./Introduction.css";
import om from "../../Assets/images/Om.jpg";

export const Introduction = () => {
  return (
    <>
      <section id="#about">
        <br />
        <div className="section" data-aos="fade-right">
          <h2
            style={{ color: "#2ECBE9", fontSize: "40px" }}
            className="section__title"
          >
            About Me
          </h2>

          <div className={"introduction "}>
            <div className="introduction_logocontainer">
              <img src={om} alt="Images" />
            </div>
            <div
              style={{ fontWeight: "lighter" }}
              className="introduction_datacontainer"
            >
              <p>
                Hi, I am <span className="different">Shivam Sherje </span> from{" "}
                <span className="different">Nagpur, Maharashtra</span>. <br />I
                am a full-stack web developer in India .I have a degree in
                mechanical engineering. I like building scalable online
                applications, and I'm always curious to learn about new
                technologies. I made clones of a few websites using HTML, CSS,
                Javascript, React, and other technologies. I am motivated to
                learn and apply my talents on a big scale, thus I have developed
                exceptional problem-solving abilities that are necessary to
                overcome complicated challenges. searching for a position as a
                web developer in order to help an organisation and build my carrer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
