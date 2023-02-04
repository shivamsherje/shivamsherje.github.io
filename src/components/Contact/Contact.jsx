import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j6s9v2f",
        "template_81ij9xh",
        form.current,
        "PFxFV6pbxYIGph9d2"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <br /> <br />
      <div className="section">
        <h2
          className="section__title"
          style={{ color: "#2ECBE9" }}
          data-aos="fade-right"
        >
          Contact Me
        </h2>

        <div className={"contactcontainer "} data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/shivam-sherje-996124138/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>

          <a
            href="https://github.com/shivamsherje"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrkVwWncdXcnzRGJxwDtsjbZbnxQzmDztRgHjmVjlWBSLQWscLDlGNdmlDqjWRSBlpDdwg"
            target="_blank"
            rel="noreferrer"
            // href="mailto:sherjes49@gmail.com"
          >
            <CgMail className="email" />
            <br />
          </a>

          <a href="tel:+917263911096" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
          </a>
        </div>
      </div>
      <br /> <br />
      <div>
        <div
          style={{
            width: "90%",
            margin: "auto",
            padding: "20px",
            fontSize: "20px",
          }}
        >
          <p
            style={{
              fontSize: "25px",
              textAlign: "center",
              fontWeight: "lighter",
            }}
          >
            -Get In Touch-
          </p>
          <br />
          <form ref={form} onSubmit={sendEmail}>
            <input
              style={{
                border: "2px solid rgb(29, 155, 240)",
                color: "gray",
                width: "100%",
                padding: "10px",
                borderRight: "none",
                borderLeft: "none",
                borderTop: "none",
              }}
              type="text"
              placeholder="Enter Your Name"
            ></input>
            <br /> <br />
            <input
              style={{
                border: "2px solid rgb(29, 155, 240)",
                color: "gray",
                width: "100%",
                padding: "10px",
                borderRight: "none",
                borderLeft: "none",
                borderTop: "none",
              }}
              type="email"
              placeholder="Enter Your Email"
            ></input>
            <br /> <br />
            <textarea
              style={{
                border: "2px solid rgb(29, 155, 240)",
                width: "100%",
                padding: "10px",
                height: "100px",
                borderRight: "none",
                borderLeft: "none",
                borderTop: "none",
              }}
              placeholder="Message.."
            ></textarea>
            <br /> <br />
            <button
              onSubmit={sendEmail}
              type="submit"
              className="resume-buttton-of-contact"
              // style={{
              //   margin: "auto",
              //   border: "0",
              //   borderTopLeftRadius: "30px",
              //   borderBottomRightRadius: "30px",
              //   backgroundImage: "linear-gradient(#0dccea, #0d70ea)",
              //   boxShadow: "rgba(0, 0, 0, .3) 0 5px 15px",
              //   color: "#fff",
              //   cursor: "pointer",
              //   fontSize: ".9em",
              //   margin: "5px",
              //   padding: "10px 15px",
              //   textAlign: "center",
              //   userSelect: "none",
              //   WebkitUserSelect: "none",
              //   touchAction: "manipulation",
              // }}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
