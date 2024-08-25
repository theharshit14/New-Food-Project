import React from "react";

const RestaurantCard = (props) => {

    const { resData } = props;
    return (
      <>
        <div className="resCard">
          <img
            className="resImage"
            src={"IMG_URL"+resData[0].info.cloudinaryImageId}
            alt="res-image"
          />
          <h5>{resData[0].info.name}</h5>
          <h5>{resData[0].info.cuisines.join(", ")}</h5>
          <h5>{resData[0].info.avgRating} Stars</h5>
        </div>
      </>
    );
  };

  export default RestaurantCard;