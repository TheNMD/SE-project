import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import logoBKU from "../assets/logo.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBar } from "./SideBar";
import "./NavBar.css";
import { RiEnglishInput, RiMessage2Fill } from "react-icons/ri";
function NavBar(props) {
  // const [sidebar, setSidebar] = useState(true);

  // const showSidebar = () => {
  //   setSidebar(!sidebar);
  // };

  return (
    <>
      <IconContext.Provider value={{ color: "#4069E5FF" }}>
        <div className="navbar">
          <div>
            <Link to="#" className="menu-bars">
            {/* onClick={showSidebar} */}
              <FaIcons.FaBars  />
            </Link>
          </div>
          <div className="navbar-icons">
            <div>
              <FaIcons.FaCalendar className="icons"></FaIcons.FaCalendar>
              <FaIcons.FaBell className="icons"></FaIcons.FaBell>
              <RiEnglishInput className="icons"></RiEnglishInput>
              <RiMessage2Fill className="icons"></RiMessage2Fill>
              <FaIcons.FaUserCircle className="icons"></FaIcons.FaUserCircle>
            </div>
          </div>
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "menu-icon" }}>
        <nav className="nav-menu active" >
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <img src={logoBKU} alt="" className="logo" />
              <span className="app-name">U.W.C</span>
            </li>
            <div className="nav-text-dash">
              <Link>
                <FaIcons.FaBars /> <span>DashBoard</span>
              </Link>
            </div>
            {SideBar.map((item, index) => {
              return (
                <li key={index} className={item.class_name}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
