import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import SkillStack from "./Components/SkillStack/SkillStack";
import Projects from "./Components/Projects/Projects";
import WorkExp from "./Components/WorkExp/WorkExp";
import Education from "./Components/Education/Education";
import Certification from "./Components/Certifications/Certification";
import Techstack from "./Components/Techstack/Techstack";
import Contact from "./Components/Contact/Contact";
import Test from "./Components/Test/Test";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavBarMobileView from "./Components/Sidebar/NavBarMobileView";
import Footer from "./Components/Footer/Footer";

export const App = () => {
  return (
    <div>
      <NavBarMobileView />
      <Sidebar />
      <About />

      <WorkExp />
      <Education />
      <Techstack />
      <Projects />
      <Certification />
      <Contact />
      <Footer />

      <ScrollToTop
        smooth={true}
        top="600"
        style={{
          borderRadius: "90px",
          backgroundColor: "#99BC85",
          height: "20",
          width: "20",
        }}
      />
    </div>
  );
};
export default App;
