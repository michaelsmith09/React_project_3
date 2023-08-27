import React,{ search, setSearch, useState, navigate, recipe} from "react";
import steak from "../../assets/steak.jpg";
import cake from "../../assets/cake.jpg";
import martini from "../../assets/martini.jpg"
import classes from "./RecipeCard.module.css";

const RecipeCard = () => {
  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }

  return (
    <div className={classes.main}>
      <span>
          {/* <BiSearchAlt2 size="2em" color="#DA7635" /> */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a Recipe"
            className={classes.search}
          />
        </span>
      <div className={classes.mainrecipe}>
        <div className={classes.card}>
            <img className={classes.cardimg} src={`${steak}`}></img>
          <h1>Rosemary Seared <br></br> Steak</h1>
          <button className={classes.btn} handleClick>See More</button>
        </div>
        <div className={classes.card}>
          <img className={classes.cardimg} src={`${cake}`}></img>
          <h1>Triple chocolate<br></br> mousse cake</h1>
          <button className={classes.btn}>See More</button>
        </div>
        <div className={classes.card}>
          <img className={classes.cardimg} src={`${martini}`}></img>
          <h1>Some Martini</h1>
          <button className={classes.btn}>See More</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
