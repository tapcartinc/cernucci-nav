import React from "react";

const MainMenu = ({ setSubCateg, menuList }) => {
  return (
    <ul className="cernucci-custom-menu-list">
      {(menuList || []).map((obj) => (
        <li className="cernucci-custom-menu-list-item" key={obj}>
          <button type="button" onClick={() => setSubCateg(obj)}>
            <span>{obj.replaceAll("_", " ")}</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
