import React, { useState } from "react";
import "./styles.css";

const FormClient = ({ addNewClient }) => {
  // addNewClient est déstructuré venant de l'objet props

  const inputRef = React.createRef();
  const ajoutNouveauClient = (event) => {
    event.preventDefault(); // pour eviter que le formulaire recharge la page web
    const id = new Date().getTime();
    const client = { id: id, name: inputRef.current.value };
    addNewClient(client);
    inputRef.current.value = "";
  };
  // const { addNewClient} = this.props; // On destructure le this.props on fait une extraction
  // plus besoin d'utiliser le  this.props.client.name  par exemple
  return (
    <form onSubmit={ajoutNouveauClient}>
      <input ref={inputRef} type="text" placeholder="Ajouter un client" />
      <button> Confirmer </button>
    </form>
  );
};

export default FormClient;

// import React, { Component } from "react";
// import "./styles.css";

// class FormClient extends React.Component {
//   inputRef = React.createRef();
//   // state{

//   // }

//   ajoutNouveauClient = (event) => {
//     event.preventDefault(); // pour eviter que le formulaire recharge la page web
//     console.log(this.inputRef.current.value);
//     const id = new Date().getTime();
//     // le spread opérator recrée un nouveau tableau comme le .slice
//     const client = { id: id, name: this.inputRef.current.value };
//     this.props.addNewClient(client);
//     this.inputRef.current.value = "";

//     // console.log('this.inputRef.current.value')
//   };

//   render() {
//     // const { addNewClient} = this.props; // On destructure le this.props on fait une extraction
//     // plus besoin d'utiliser le  this.props.client.name  par exemple
//     return (
//       <form onSubmit={this.ajoutNouveauClient}>
//         <input
//           ref={this.inputRef}
//           type="text"
//           placeholder="Ajouter un client"
//         />
//         <button> Confirmer </button>
//       </form>
//     );
//   }
// }

// export default FormClient;
