import React from "react";

const MenuCategory = ({ category, setCategory,types,setSubCateg }) => {
  return (
    <div className="cernucci-custom-menu-category">
      {types.map((obj) => {
        return (
          <button
            key={obj}
            className={`cernucci-custom-menu-category-item ${
              obj === category ? "active" : ""
            }`}
            type="button"
            onClick={() => {
              setSubCateg("")
              setCategory(obj)}}
          >
            {obj}
          </button>
        );
      })}
    </div>
  );
};

export default MenuCategory;
