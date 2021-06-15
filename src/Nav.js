import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to="/">Pokedex</Link>
      </nav>
    </header>
  );
};

export default Nav;
