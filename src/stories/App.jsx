import React from "react";
import PropTypes from "prop-types";
import "./app.css";
import { Carta } from "./Carta";
import { Titulo } from "./Titulo";

function App({ args, data, direction, ...props }) {
  return (
    <div className="App">
      <Titulo label={"Mis regalos"} />
      <section className={`responsive-box--${direction}`} {...props}>
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
