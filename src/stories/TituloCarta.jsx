import React from "react";
import PropTypes from "prop-types";

//import { Button } from './Button';
import "./tituloCarta.css";

export const TituloCarta = ({ titulo, color, fontSize }) => (
  <h3 className={`storybook-title--${fontSize}`} style={color && { color }}>
    {titulo}
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
