import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
        height: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: 250,
        }}
      >
        <h3
          style={{
            color: "white",
            fontSize: 21,
          }}
        >
          New Recipe
        </h3>
        <h1
          style={{
            fontSize: 50,
            color: "orange",
          }}
        >Pineapple Salmon</h1>
        <h3
          style={{
            color: "white",
            fontSize: 21,
            width: 700,
            textAlign: "center",
          }}
        >
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and
          garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button 
          className="blue-btn"
          style={{
            backgroundColor: "aquamarine",
            width: 110,
            height: 35,
          }}
          >Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
