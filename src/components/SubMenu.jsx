import React from "react";
import { useActions } from "@tapcart/webbridge-react";

const SubMenu = ({ menuList, subCateg, setSubCateg }) => {
  const { openCollection } = useActions();
  const openCollectionAction = (id) => {
    openCollection({ collectionId: `${id}` });
  };
  return (
    <ul className={`cernucci-custom-menu-sub ${subCateg ? "active" : ""}`}>
      <li className="cernucci-custom-menu-sub-back" onClick={() => setSubCateg("")}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
        </svg>
        <span>{subCateg.replaceAll("_"," ")}</span>
      </li>
      {(menuList[subCateg] || []).map((obj, index) => (
        <li key={`subKey${index}`} className="cernucci-custom-menu-sub-item" onClick={()=>openCollectionAction(obj.collectionId)}>{obj.text}
          {/* <a href={obj.link}>{obj.text}</a> */}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
