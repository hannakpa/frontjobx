import React from "react";
import PropTypes from "prop-types";
import "./app.css";
import { Carta } from "./Carta";
import { Titulo } from "./Titulo";

function Page({ args, data, direction, ...props }) {
  return (
    <div className="App">
      <Titulo label={"Mis regalos"} />
      <section className={`responsive-box--${direction}`} {...props}>
        {data.map((obj, index) => (
          <Carta {...props} label={obj} key={index} />
        ))}
      </section>
    </div>
  );
}

Page.PropTypes = {
  direction: PropTypes.oneOf(["row", "column"]),
};

Page.defaultProps = {
  direction: "row",
};

export default Page;
