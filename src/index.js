import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Client from "./Client";
import FormClient from "./FormClient";

class Todolist extends React.Component {
  state = {
    clients: [
      { id: 1, name: "Richard" },
      { id: 2, name: "Freddy" },
      { id: 3, name: "Johnas" }
    ],
    title: "Richard le gosse",
    compteur: 0
  };

  goodClick() {
    console.log("alert");
    alert("Bonjour Mr " + this.state.title);
  }

  mappingDelete = (id) => {
    const copyClientArray = this.state.clients.slice();
    const index = copyClientArray.findIndex((client) => client.id === id);
    copyClientArray.splice(index, 1);
    this.setState({ clients: copyClientArray });
    console.log(copyClientArray);
    alert("Bonjour Mr " + id);
  };

  ajoutNouveauClientParent = (client) => {
    const copyClientArray = [...this.state.clients]; // le spread opérator recrée un nouveau tableau comme le .slice
    copyClientArray.push(client);
    this.setState({ clients: copyClientArray });
  };

  render() {
    // const mappingClients = this.state.clients.map(function (client) {
    //   return (
    //     <li key={client.id}>
    //       {client.name} <button onClick={()=>this.mappingClick(client.id)}> click</button>
    //     </li>
    //   );
    // });
    const titre = "Liste des Clients 2";
    const element = (
      <li>
        Johnattan <button onClick={() => this.goodClick()}> X</button>
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

        <ul>
          {/* TECHNIQUE SANS LES COMPOSANTS :  */}

          {this.state.clients.map((client) => (
            <li key={client.id}>
              {client.name}{" "}
              <button onClick={() => this.mappingDelete(client.id)}>
                {" "}
                click alert
              </button>
            </li>
          ))}
        </ul>
        <p>..........</p>

        {/* TECHNIQUE AVEC IMPORTATION DES COMPOSANTS :  */}
        <ul>
          {this.state.clients.map((client) => (
            <Client
              client={client}
              key={client.id}
              onDelete={this.mappingDelete}
            />
          ))}
          {tableauElements[1]}
          {element}
          <li>
            {this.state.title} <button> X</button>
          </li>
          <li>
            John <button> X</button>
          </li>
        </ul>
        <FormClient addNewClient={this.ajoutNouveauClientParent} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Todolist />
  </React.StrictMode>,
  rootElement
);
