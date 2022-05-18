import React from "react";
import "./app.css";
import { Carta } from "./Carta";
import { Titulo } from "./Titulo";

function App({ args, data }) {
  return (
    <div className="App">
      <Titulo label={"Mis regalos"} />
      <section className="responsive-box">
        {data.map((obj, index) => (
          <Carta {...args} label={obj} key={index} />
        ))}
      </section>
    </div>
  );
}

export default App;
