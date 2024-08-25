import React from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
    return (
      <>
        <div className="main">
          <div className="search-btn">
            <input type="text"></input>
            <button>Search restaurant here...</button>
          </div>
          <div className="res-list">
            <RestaurantCard  resData={resObj}/>
          </div>
        </div>
      </>
    );
  };


export default Body;