import React from "react";
import PropTypes from "prop-types";

//import { Button } from './Button';
import "./titulo.css";

export const Titulo = ({ label, color, fontSize, ...props }) => (
  <h3 className={`storybook-title--${fontSize}`} style={color && { color }} {...props}>
    {label}
  </h3>
);

Titulo.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.oneOf(["sm", "md", "lg"]),
};

Titulo.defaultProps = {
  color: "black",
  fontSize: "md",
};
