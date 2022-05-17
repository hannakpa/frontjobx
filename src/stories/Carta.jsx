import React from "react";
import PropTypes from "prop-types";

//import { Button } from './Button';
import "./carta.css";

export const Carta = ({ size, desc }) => (
  <div className={`storybook-card size--${size}`}>
    <p style={{ textAlign: "center" }}>{desc}</p>
  </div>
);

Carta.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: undefined,
};

Carta.defaultProps = {
  size: "md",
  onClick: undefined,
};
