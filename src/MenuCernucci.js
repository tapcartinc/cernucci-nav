import React, { useState } from "react";
import MenuCategory from "./components/MenuCategory";
import MainMenu from "./components/MainMenu";
import SubMenu from "./components/SubMenu";
//import FeaturedCollections from  "./components/FeaturedCollections";

const Menu = ({ menuContent }) => {
  const [category, setCategory] = useState("mens");
  const [subCateg, setSubCateg] = useState("");

  return (
    <div className="cernucci-custom-menu">
      <MenuCategory
        category={category}
        setCategory={setCategory}
        setSubCateg={setSubCateg}
        types={Object.keys(menuContent)}
      />
      <div style={{ position: "relative" }}>
        <MainMenu
          setSubCateg={setSubCateg}
          menuList={Object.keys(menuContent[category])}
        />
        <SubMenu
          subCateg={subCateg}
          setSubCateg={setSubCateg}
          menuList={menuContent[category]}
        />
      </div>
      {/* <FeaturedCollections/> */}
    </div>
  );
};

export default Menu;
