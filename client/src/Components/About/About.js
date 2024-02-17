import React from "react";
import "./About.css";
//import pic from "../../assets/images/";
import Fade from "react-reveal/Fade";
import {
  FaBold,
  FaGithub,
  FaJava,
  FaPython,
  FaReact,
  FaNode,
  FaLinkedin,
  FaAws,
  FaJira,
  FaJenkins,
  FaRegFileExcel,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { FaCss3, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeScss, BsBootstrapFill, BsFiletypeSql } from "react-icons/bs";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiAdobe,
  SiPowerbi,
  SiTableau,
  SiStreamlit,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { CiMicrochip } from "react-icons/ci";
import profilePic from "./profile-pic.jpg";

const About = () => {
  const iconStyle = {
    color: "inherit", // Set to 'inherit' to preserve the default color
  };
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-title">
            <h1>Get to know me!</h1>
          </div>
          <span className="line"></span>
          <div className="profile-image">
            <img src={profilePic} alt="profile pic"></img>
          </div>

          <div className="about-details">
            <Fade right>
              <p style={{ textAlign: "justify" }}>
                I am highly motivated professional with a{" "}
                <strong>
                  Master's in Information Systems from Georgia State University,
                  J. Mack Robinson College of Business
                </strong>
                , focusing on Big Data Analytics. With a strong academic
                background, including a Master's in Computer Science from
                Savitribai Phule Pune University and a Bachelor's in Computer
                Science from the same institution, I have developed a solid
                foundation in both theoretical knowledge and practical skills.
              </p>
              <p style={{ textAlign: "justify" }}>
                Experienced in{" "}
                <strong>
                  JavaScript, React JS, Redux, and proficient with tools like
                  Visual Studio, Adobe Experience Manager, and AWS,
                </strong>{" "}
                I've led software development and project management at
                Accenture, notably enhancing e-commerce platforms and
                integrating intricate payment systems for projects like BMS and
                Aldi-Hofer.
              </p>

              <p style={{ textAlign: "justify" }}>
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
              <p style={{ textAlign: "justify" }}>
                Currently, I am enthusiastic about securing a new and
                challenging role that offers avenues for professional
                development, allows me to refine my technical expertise, and
                enables me to make meaningful contributions to impactful
                projects.
              </p>
            </Fade>
          </div>
        </div>
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-title">
              <h1>My Skills</h1>
            </div>
            <span className="line"></span>
            <div className="skillset">
              <h5>
                <strong>Programming languages:</strong>
              </h5>
              <br />
              <div style={{ display: "inline-block", marginRight: "30px" }}>
                <FaJava size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Java
                </p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  marginRight: "30px",
                  textAlign: "center",
                }}
              >
                <IoLogoJavascript size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  JavaScript
                </p>
              </div>

              <div style={{ display: "inline-block", marginRight: "30px" }}>
                <FaPython size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Python
                </p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                <BsFiletypeSql size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  SQL
                </p>
              </div>
            </div>

            <div className="skillset">
              <h5>
                <strong>Database:</strong>
              </h5>
              <br />
              <div
                style={{
                  display: "inline-block",
                  marginRight: "30px",
                  textAlign: "center",
                }}
              >
                <SiMysql size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  MySql
                </p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  marginRight: "30px",
                  textAlign: "center",
                }}
              >
                <BiLogoPostgresql size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  PostgreSQL
                </p>
              </div>

              <div style={{ display: "inline-block", textAlign: "center" }}>
                <SiMongodb size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  MongoDB
                </p>
              </div>
            </div>

            <div className="skillset">
              <h5>
                <strong>Web technologies:</strong>
              </h5>
              <br />
              <div
                style={{
                  display: "inline-block",
                  marginRight: "30px",
                  textAlign: "center",
                }}
              >
                <TbApi size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  RestFul API
                </p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  marginRight: "30px",
                  textAlign: "center",
                }}
              >
                <FaReact size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  React
                </p>
              </div>

              <div style={{ display: "inline-block", textAlign: "center" }}>
                <FaHtml5 size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  HTML/HTML5
                </p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  marginLeft: "10px",
                  marginRight: "25px",
                }}
              >
                <FaCss3 size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    marginLeft: "10px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  CSS/SAAS
                </p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  marginRight: "25px",
                }}
              >
                <BsBootstrapFill size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Bootstarp
                </p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  marginRight: "25px",
                }}
              >
                <FaNode size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Node Js
                </p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  marginRight: "25px",
                }}
              >
                <SiExpress size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Express Js
                </p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  marginRight: "25px",
                }}
              >
                <SiAdobe size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Adobe Experience Manager
                </p>
              </div>
              <div style={{ display: "inline-block", textAlign: "center" }}>
                <SiStreamlit size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Streamlit
                </p>
              </div>
            </div>
            <div className="skillset">
              <h5>
                <strong>Visualization Tools:</strong>
              </h5>
              <br />
              <div
                style={{
                  display: "inline-block",
                  marginRight: "30px",
                  textAlign: "center",
                }}
              >
                <SiPowerbi size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  PowerBI
                </p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  marginRight: "30px",
                }}
              >
                <SiTableau size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Tableau
                </p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  marginRight: "30px",
                  textAlign: "center",
                  marginRight: "30px",
                }}
              >
                <FaRegFileExcel size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Excel
                </p>
              </div>

              <div style={{ display: "inline-block", textAlign: "center" }}>
                <FaJira size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Jira
                </p>
              </div>
            </div>
            <div className="skillset">
              <h5>
                <strong>Other:</strong>
              </h5>
              <br />
              <div
                style={{
                  display: "inline-block",
                  marginRight: "30px",
                  textAlign: "center",
                }}
              >
                <FaAws size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  AWS
                </p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  marginRight: "30px",
                  textAlign: "center",
                  marginRight: "30px",
                }}
              >
                <SiPostman size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Postman
                </p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  marginRight: "30px",
                }}
              >
                <FaGithub size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Github
                </p>
              </div>

              <div style={{ display: "inline-block", textAlign: "center" }}>
                <FaJira size={30} style={{ padding: "0 1px" }} />
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Jira
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
