import React from "react";
import "./About.css";
import pic from "../../image/Preeti.jpg";
import Fade from "react-reveal/Fade";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  const iconStyle = {
    color: "inherit", // Set to 'inherit' to preserve the default color
  };
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="profile-image">
              <img src={pic} alt="Preeti N"></img>
            </div>
          </div>
        </Fade>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-title">
            <h1>About Me</h1>
          </div>
          <span className="line"></span>
          <div className="about-details">
            <Fade right>
              <p>
                With over 7 years of experience in information technology, I am
                a versatile and accomplished software engineer and product
                owner, specializing in MERN stack development, Adobe Experience
                Manager (AEM), and big data analytics. As a Graduate Research
                Assistant at Georgia State University - J. Mack Robinson College
                of Business, I leverage my technical and leadership skills to
                spearhead innovative and impactful IoT projects, demonstrating
                expertise in project conception, development, and delivery.
              </p>
              <p>
                In addition to my academic pursuits, I hold multiple
                certifications in AEM and Scrum, enhancing my proficiency and
                credibility in managing and optimizing digital experiences. As a
                former Senior Web Application Developer at Accenture and Senior
                Software Development Engineer at Wipro Digital, I have
                contributed to the development of high-performance e-commerce
                platforms and single page applications, resulting in significant
                improvements in user engagement, satisfaction, and security. I
                am eager to apply my diverse skill sets and domain knowledge to
                new challenges and opportunities in the software industry.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <a
                  href="https://github.com/PreetiNalawade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={30}
                    style={{ ...iconStyle, marginRight: "10px" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/preeti-nalawade-11a3b914b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} style={iconStyle} />
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12"></div>
      </div>
    </div>
  );
};

export default About;
