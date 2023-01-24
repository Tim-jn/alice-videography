import "./DropDownMenu.scss";
import { useState } from "react";

export default function DropDownMenu() {
  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  return (
    <div className={!toggle ? "sidebar" : "sidebar sidebar-active"}>
      <div className="dropdown-button" onClick={toggleSidebar}></div>
      <div className="close-button" onClick={toggleSidebar}></div>
      {toggle ? (
        <ul className="nav-list">
          <li>
            {/* <a href="#"> */}
            <span className="link-name">Work</span>
            {/* </a> */}
          </li>
          <li>
            {/* <a href="#"> */}
            <span className="link-name">Bio</span>
            {/* </a> */}
          </li>
          <li>
            {/* <a href="#"> */}
            <span className="link-name">Contact</span>
            {/* </a> */}
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
