import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import { Reveal, Rotate } from "react-reveal";
import {
  SiHsbc,
  SiAldinord,
  SiSymantec,
  SiAccenture,
  SiWipro,
} from "react-icons/si";
import { IoHandRight } from "react-icons/io5";

const Home = () => {
  return (
    <div className="container-fluid home" id="home">
      <div className="container home-content">
        <div className="flex-container">
          <Fade right>
            <div>
              <h1>Hi, I'm Preeti Nalawade</h1>
              <h1 className="h1">
                <Typewriter
                  options={{
                    strings: [
                      "MERN Stack Developer",
                      "AEM Developer",
                      "Web Developer",
                      "UI/UX Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 5,
                  }}
                />
              </h1>
              <br></br>
              <p>
                <h2 className="h2">
                  A frontend software engineer and interface designer who builds
                  UX rich accessible and performant websites.
                </h2>
              </p>
            </div>
          </Fade>
          <img
            src="https://www.gracesportfolio.com/assets/measa.gif"
            alt="funny GIF"
            width="30%"
          />
        </div>

        <button className="button-86" role="button">
          Download Resume
        </button>

        <div className="rotate-container">
          <h3>Clients Worked For</h3>
          <span className="line" />
        </div>

        <br></br>
        <br></br>
        <div className="icons-container">
          <div className="icon">
            <SiAccenture size={100} color="black" />
            <span className="icon-name">Accenture</span>
          </div>
          <div className="icon">
            <SiWipro size={100} color="black" />
            <span className="icon-name">Wipro Technologies</span>
          </div>
          <div className="icon">
            <IoHandRight size={100} color="black" />
            <span className="icon-name">Bristol Myer</span>
          </div>
          <div className="icon">
            <SiAldinord size={100} color="black" />
            <span className="icon-name">Aldi-Hofer</span>
          </div>
          <div className="icon">
            <SiHsbc size={100} color="black" />
            <span className="icon-name">HSBC</span>
          </div>
          <div className="icon">
            <SiSymantec name="Symantec" size={100} color="black" />
            <span className="icon-name">Symantec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
