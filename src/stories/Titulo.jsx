import React from "react";
import PropTypes from "prop-types";
import "./titulo.css";

///Recibe los argumentos desde stories y aplica el color e imprime el label. También recibe una propiedad de tamaño de texto, que luego comprobará en titulo.css con su clase correspondiente.
export const Titulo = ({ label, color, fontSize, ...props }) => (
  <h3 className={`storybook-title--${fontSize}`} style={color && { color }} {...props}>
    {label}
  </h3>
);

//definición de los tipos de propiedad
///se puede elegir entre tres opciones de tamaño
Titulo.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.oneOf(["sm", "md", "lg"]),
};

//// propiedades por defecto
Titulo.defaultProps = {
  color: "black",
  fontSize: "md",
};
