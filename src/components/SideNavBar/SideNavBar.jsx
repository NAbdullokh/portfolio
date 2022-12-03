import React, { useState } from "react";
import { navItems } from "../../mock/navItems";
import "./SideNavBar.css";

const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(false);

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <h2>Abdulloh</h2>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {navItems.map((value) => (
            <a
              key={value.id}
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              href={value.path}
            >
              <img className="menu-item-icon" src={value.icon} alt="" />
              {isExpanded && <p>{value.title}</p>}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
