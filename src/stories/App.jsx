import React from "react";
//import "./app.css";
import { Carta } from "./Carta";
import { Titulo } from "./Titulo";

function App({ args, data }) {
  return (
    <div className="App">
      <Titulo label={"Mis regalos"} />

      <div className="responsive-box">{Carta}</div>
    </div>
  );
}

export default App;
