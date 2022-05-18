import React from "react";
import "./app.css";
import { Carta } from "./Carta";
import { Titulo } from "./Titulo";
import PropTypes from "prop-types";

function App({ args, data, direction }) {
  return (
    <div className="App">
      <Titulo label={"Mis regalos"} />
      <section className={`responsive-box--${direction}`}>
        {data.map((obj, index) => (
          <Carta {...args} label={obj} key={index} />
        ))}
      </section>
    </div>
  );
}

App.PropTypes = {
  direction: PropTypes.oneOf(["row", "column"]),
};

App.defaultProps = {
  direction: "row",
};

export default App;
