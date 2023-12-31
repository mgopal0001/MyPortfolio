import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./style.css";
import AboutImage from "../../assets/about-image.png";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

const About = () => {
  return (
    <>
      <div className="about-main-con">
        <div className="about-con">
          <div className="about-text-con">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am{" "}
              <span className="purple"> Madan Gopal </span>
              from <span className="purple"> Varanasi, India.</span>
              <br />
              I have completed Master of Computer Application from <span className="purple"><br/> KIET Group of Institutions Ghaziabad.</span>
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                 Playing Guitar
              </li>
              <li className="about-activity">
                 Writing Tech Blogs
              </li>
              <li className="about-activity">
                Travelling
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "Strive to build things that make a difference!"{" "}
            </p>
          </div>
          <div className="about-image-con">
            <img src={AboutImage} className="about-img" width={700} />
          </div>
        </div>
        <div className="skills-con">
        <h2>Professional <strong className="purple">Skillset </strong></h2>
          <Techstack/>
        </div>
        <div className="tools-con">
        <h2>Tools <strong className="purple">I use </strong></h2>
          <Toolstack/>
        </div>
      </div>
    </>
  );
};

export default About;
