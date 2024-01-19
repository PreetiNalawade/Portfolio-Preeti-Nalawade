import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import SkillStack from "./Components/SkillStack/SkillStack";

export const App = () => {
  return (
    <div>
      <Sidebar />
      <About />
      <SkillStack />
    </div>
  );
};
export default App;
