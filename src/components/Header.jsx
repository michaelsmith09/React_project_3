import {Link} from 'react-router-dom'
import React from "react";
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.h}>
      <h2 className={classes.text}>Devmountain Eatery</h2>
      <nav>
        <Link to="">
          <button className={classes.text}>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className={classes.text}>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
