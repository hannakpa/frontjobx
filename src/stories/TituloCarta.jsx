import React from "react";
import PropTypes from "prop-types";

//import { Button } from './Button';
import "./tituloCarta.css";

export const TituloCarta = ({ label, color, fontSize }) => (
  <h3 className={`storybook-titulo--${fontSize}`} style={color && { color }}>
    {label}
  </h3>
);

TituloCarta.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.oneOf(["sm", "md", "lg"]),
};

TituloCarta.defaultProps = {
  color: "black",
  fontSize: "md",
};
