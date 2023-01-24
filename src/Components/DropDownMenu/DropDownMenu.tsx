import "./DropDownMenu.scss";
import { useState } from "react";
import { data } from "../../data/data";

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
              <a href="/">
                <span className="link-name">Home</span>
              </a>
            </li>
            {data.map(({ id, title, url }) => {
              return (
                <li key={id}>
                  <a href={url}>
                    <span className="link-name">{title}</span>
                  </a>
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
