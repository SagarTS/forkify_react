import Nav from "./Nav";
import React from "react";
import MobileNav from "./MobileNav";

const Navigation = ({
  setSelectedRecipe,
  setHaveSearched,
  setFavourite,
  favourite,
}) => {
  return (
    <div>
      <Nav
        {...{ setSelectedRecipe, setHaveSearched, setFavourite, favourite }}
      />
      <MobileNav
        {...{ setSelectedRecipe, setHaveSearched, setFavourite, favourite }}
      />
    </div>
  );
};

export default Navigation;
