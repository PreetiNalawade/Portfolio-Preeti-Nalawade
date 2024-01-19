import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="container home-content">
        <h1>Hi! I am Preeti Nalawade</h1>
        <h3>
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
        </h3>

        <div>
          <button className="button-71" role="button">
            <a
              href="https://drive.google.com/file/d/1vJwpIhlUZLL9-NckYZAS9pjfHFNpE8_r/view"
              target="_blank"
            >
              Get Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
