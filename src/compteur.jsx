import React, { useState } from "react";
import ReactDom from "react-dom";
import "./style.css";

const Counter = (props) => {
  const compteur = useState(1); // usteState est un tableau a deux arguments : 1er index est la valeur de la variable
  // 2eme index est la methode  comme this.setState dans les classe componant (HOOK)
  const setCompteur = compteur[1];
  return (
    <p>
      {compteur}
      <button onClick={() => setCompteur(compteur + 1)}>
        {" "}
        mettre à jour le compteur
      </button>
    </p>
  );
};
