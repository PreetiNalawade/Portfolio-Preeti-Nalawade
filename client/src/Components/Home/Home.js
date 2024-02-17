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
              <br></br>
              <h2 className="h2">
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
              </h2>
              <br></br>
              <br></br>
              <p>
                <h3 className="h3">
                  A frontend software engineer and interface designer who builds
                  UX rich accessible and performant websites.
                </h3>
              </p>
            </div>
          </Fade>
          <img
            src="https://www.gracesportfolio.com/assets/measa.gif"
            alt="funny GIF"
            width="35%"
          />
        </div>

        <button className="button-86" role="button">
          Download Resume
        </button>

        {/* <div className="rotate-container">
          <h5>Clients Worked For</h5>
          <span className="line" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
