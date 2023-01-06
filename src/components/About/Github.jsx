import React from "react";
import Githubcalendar from "react-github-calendar";

export const Github = () => {


  return (
    <>
      <div className={"section"} data-aos="fade-right">
        <h2
          style={{ color: "#2ECBE9", fontSize: "40px" }}
          className="section__title different"
        >
          Days I Code
        </h2>
        <Githubcalendar
          username="shivamsherje"
          blockSize={15}
          blockMargin={5}
          color={"yellowgreen"}
          fontSize={16}
        />
      </div>
    </>
  );
};
