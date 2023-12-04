import React from "react";

const FeaturedCollections = () => {
  return (
    <div className="cernucci-custom-menu-featured">
      <div className="title">Featured Collections</div>
      <div className="cernucci-custom-menu-featured-list">
        {Object.keys([...new Array(4)]).map((obj) => {
          return (
            <div
              key={`feature${obj}`}
              className="cernucci-custom-menu-featured-list-item"
            >
              <div className="cernucci-custom-menu-featured-list-item-media">
                <img
                  src="//www.cernucci.com/cdn/shop/files/Womens_New_or_ICED.jpg?v=1695378948"
                  alt=""
                />
              </div>
              <div>New in</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedCollections;
