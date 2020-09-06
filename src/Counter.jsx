import React, { useState } from "react";
import "./styles.css";

const Counter = (props) => {
  const tableauCompteur = useState(1); // usteState est un tableau a deux arguments : 1er index est la valeur de la variable
  // 2eme index est la methode  comme this.setState dans les classe componant (HOOK)
  // const compteur = tableauCompteur[0];
  // const setCompteur = tableauCompteur[1];

  const [compteur, setCompteur] = tableauCompteur;
  const handleChange = () => {
    setCompteur(compteur + 1);
  };
  return (
    <p>
      {compteur}
      <button onClick={handleChange}> mettre à jour le compteur</button>
    </p>
  );
};

export default Counter;
