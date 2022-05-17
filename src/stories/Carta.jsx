import React from "react";
import PropTypes from "prop-types";
import { TituloCarta } from "./TituloCarta";
//import { Button } from './Button';
import "./carta.css";

export const Carta = ({ size, desc, label }) => (
  <div className={`storybook-card size--${size}`}>
    <h1>{label}</h1>
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
