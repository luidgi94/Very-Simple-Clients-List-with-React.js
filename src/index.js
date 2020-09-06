import React, { useState } from "react";
import ReactDOM from "react-dom";

// import App from "./App";
import Client from "./Client";
import FormClient from "./FormClient";
import Counter from "./Counter";
const Todolist = (props) => {
  const [clients, setClient] = useState([
    { id: 1, name: "Richard" },
    { id: 2, name: "Freddy" },
    { id: 3, name: "Johnas" }
  ]);
  const [title, setTitle] = useState("Richard le gosse");

  const goodClick = () => {
    console.log("alert");
    alert("Bonjour Mr " + title);
  };

  const mappingDelete = (id) => {
    const copyClientArray = clients.slice();
    const index = copyClientArray.findIndex((client) => client.id === id);
    copyClientArray.splice(index, 1);
    setClient(copyClientArray);
    console.log(copyClientArray);
    alert("Bonjour Mr " + id);
  };

  const ajoutNouveauClientParent = (client) => {
    // recois un client du composant formulaire
    const copyClientArray = [...clients]; // le spread opérator recrée un nouveau tableau comme le .slice
    copyClientArray.push(client);
    setClient(copyClientArray);
  };

  const titre = "Liste des Clients 2";
  const element = (
    <li>
      Johnattan <button onClick={() => goodClick()}> X</button>
    </li>
  );

  const tableauElements = [
    <li>
      index1 <button> X</button>
    </li>,
    <li>
      index2 <button> X</button>
    </li>
  ];

  return (
    <div className="todolist">
      <h1>{titre}</h1>
      <h2>Petit éditeur de liste de client!</h2>
      <Counter />
      <ul>
        {/* TECHNIQUE SANS LES COMPOSANTS :  */}

        {clients.map((client) => (
          <li key={client.id}>
            {client.name}{" "}
            <button onClick={() => mappingDelete(client.id)}>
              {" "}
              click alert
            </button>
          </li>
        ))}
      </ul>
      <p>..........</p>

      {/* TECHNIQUE AVEC IMPORTATION DES COMPOSANTS :  */}
      <ul>
        {clients.map((client) => (
          <Client client={client} key={client.id} onDelete={mappingDelete} />
        ))}
        {tableauElements[1]}
        {element}
        <li>
          {title} <button> X</button>
        </li>
        <li>
          John <button> X</button>
        </li>
      </ul>
      <FormClient addNewClient={ajoutNouveauClientParent} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Todolist />
  </React.StrictMode>,
  rootElement
);

// const mappingClients = this.state.clients.map(function (client) {
//   return (
//     <li key={client.id}>
//       {client.name} <button onClick={()=>this.mappingClick(client.id)}> click</button>
//     </li>
//   );
// });
