import React, { Component } from "react";
import "./styles.css";
import { render } from "react-dom";

const Client = ({ client, onDelete }) => (
  // On destructure le this.props qui est recu en paramettre on fait une extraction
  // plus besoin d'utiliser le  this.props.client.name  par exemple
  <li>
    {client.name}{" "}
    <button onClick={() => onDelete(client.id)}> click alert</button>
  </li>
);

export default Client;

// class Client extends React.Component {
//   // state{

//   // }

//   render() {
//     const { client, onDelete } = this.props; // On destructure le this.props on fait une extraction
//     // plus besoin d'utiliser le  this.props.client.name  par exemple
//     return (
//       <li>
//         {client.name}{" "}
//         <button onClick={() => onDelete(client.id)}> click alert</button>
//       </li>
//     );
//   }
// }

/////////////////

// function Client({ client, onDelete }) {
//   // On destructure le this.props qui est recu en paramettre on fait une extraction
//   // plus besoin d'utiliser le  this.props.client.name  par exemple
//   return (
//     <li>
//       {client.name}{" "}
//       <button onClick={() => onDelete(client.id)}> click alert</button>
//     </li>
//   );
// }
