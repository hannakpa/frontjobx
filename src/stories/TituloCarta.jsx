import React from "react";
import PropTypes from "prop-types";
import "./tituloCarta.css";

///añadir props para poder importar desde .stories con solo pasar los argumentos. para esto se necesita importar PropTypes, ...props y añadir en las propiedades del elemento al que le va a afectar
export const TituloCarta = ({ titulo, fontSize, color, ...props }) => (
  <h4 className={`storybook-title--${fontSize}`} style={color && { color }} {...props}>
    {titulo} 🎉
  </h4>
);

TituloCarta.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.oneOf(["sm", "md", "lg"]),
};

TituloCarta.defaultProps = {
  fontSize: "md",
};
