import React from "react";

import "./Topbar.css";

import pokeballcolour from "../images/pokeballcolour.png";
import pokeball from "../images/pokeball.png";

export const Topbar = () => {
  return (
    <div className="title">
      <div className="title-left">
        <p>Pokedex</p>
        <div className="caught-seen">
          <div className="caught">
            <img
              src={pokeballcolour}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img
              src={pokeball}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>649</p>
          </div>
        </div>
      </div>
      <p style={{ color: "white" }}>A -&gt; Z</p>
    </div>
  );
};
