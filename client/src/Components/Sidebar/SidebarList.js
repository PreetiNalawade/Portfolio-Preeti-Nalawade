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
              <FcHome size={40} />
              Home
            </li>
            <li className="nav-item">
              <FcBusinesswoman size={40} />
              About
            </li>
            <li className="nav-item">
              <FcFactory size={40} />
              Work Experience
            </li>
            <li className="nav-item">
              <FcGraduationCap size={40} />
              Education
            </li>
            <li className="nav-item">
              <FcEngineering size={40} />
              Tech Stack
            </li>
            <li className="nav-item">
              <FcIdea size={40} />
              Projects
            </li>
            <li className="nav-item">
              <FcList size={40} />
              Certifications
            </li>
            <li className="nav-item">
              <FcRating size={40} />
              Awards/Recognitions
            </li>
            <li className="nav-item">
              <FcPhone size={40} />
              Contact
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-icons-only">
          <ul>
            <li className="nav-item">
              <FcHome size={40} />
            </li>
            <li className="nav-item">
              <FcBusinesswoman size={40} />
            </li>
            <li className="nav-item">
              <FcFactory size={40} />
            </li>
            <li className="nav-item">
              <FcGraduationCap size={40} />
            </li>
            <li className="nav-item">
              <FcEngineering size={40} />
            </li>
            <li className="nav-item">
              <FcIdea size={40} />
            </li>
            <li className="nav-item">
              <FcList size={40} />
            </li>
            <li className="nav-item">
              <FcRating size={40} />
            </li>
            <li className="nav-item">
              <FcPhone size={40} />
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
