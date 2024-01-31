import React, { useState } from "react";
import "./Sidebar.css";
import Home from "../Home/Home";
import { FcPrevious, FcNext } from "react-icons/fc";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);
  const handlerExpandClick = () => {
    setExpandSidebar(!expandSidebar);
  };
  return (
    <div className="container-fluid sidebar-section" id="sidebar">
      <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>
        <div className="icon-sidebar-collapse-expand">
          <p onClick={handlerExpandClick}>
            {expandSidebar ? <FcPrevious size={30} /> : <FcNext size={30} />}
          </p>
        </div>
        <SidebarList expandSidebar={expandSidebar} />
      </div>

      <div className="container-fluid">
        <p>
          <Home />
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
