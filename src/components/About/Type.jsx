import { red } from "@material-ui/core/colors";
import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <div className="typewriter">
      <Typewriter 
    
        options={{
          strings: ["A Full Stack Web Developer", "A MERN Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
     
      />
    </div>
  );
};
