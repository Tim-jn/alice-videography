import "./DropDownMenu.scss";
import { useState } from "react";
import { pages } from "../../data/pages";
import { Link } from "react-router-dom";

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
        <nav className="nav-list">
          <ul>
            <li>
              <Link to="/">
                <span className="link-name">Home</span>
              </Link>
            </li>
            {pages.map(({ id, title, url }) => {
              return (
                <li key={id}>
                  <Link to={url}>
                    <span className="link-name">{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
}
