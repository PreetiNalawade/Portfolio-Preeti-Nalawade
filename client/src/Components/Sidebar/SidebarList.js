import React from "react";
import Sidebar from "./Sidebar";
import profilePic from "../../image/Preeti.jpg";
import "./SidebarList.css";
import {
  FcHome,
  FcBusinesswoman,
  FcFactory,
  FcGraduationCap,
  FcEngineering,
  FcIdea,
  FcRating,
  FcList,
  FcPhone,
} from "react-icons/fc";
import { Link } from "react-scroll";

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="profile-picture">
            <img src={profilePic} alt="Profile Icon" />
          </div>
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={30} />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBusinesswoman size={30} />
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workexp"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFactory size={30} />
                Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcGraduationCap size={30} />
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcEngineering size={30} />
                Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcIdea size={30} />
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="certification"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcList size={30} />
                Certifications
              </Link>
            </li>
            <li className="nav-item">
              <FcRating size={30} />
              Awards
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcPhone size={30} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-icons-only">
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBusinesswoman size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workexp"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFactory size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcGraduationCap size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcEngineering size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcIdea size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="certification"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcList size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <FcRating size={30} />
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcPhone size={30} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
