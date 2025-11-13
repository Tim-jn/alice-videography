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
      <button 
        className="dropdown-button" 
        onClick={toggleSidebar}
        aria-label="Open navigation menu"
        aria-expanded={toggle}
      ></button>
      <button 
        className="close-button" 
        onClick={toggleSidebar}
        aria-label="Close navigation menu"
      ></button>
      {toggle ? (
        <nav className="nav-list" aria-label="Main navigation">
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
