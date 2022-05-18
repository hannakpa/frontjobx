import React from "react";
import PropTypes from "prop-types";
import "./badge.css";

/**
componente que se imprimira
 */

///si hay un texto que viene del array en stories de Cartas, entonces imprime (se imprime en cartas). si quiero personalizar, utiliza el label del que se puede elegir.
export const Badge = ({ backgroundColor, size, texto, label, ...props }) => (
  <>
    {texto ? (
      <>
        {texto.map((elemento) => (
          <span className={`tip--${size}`} style={backgroundColor && { backgroundColor }} {...props}>
            {elemento}
          </span>
        ))}
      </>
    ) : (
      <span className={`tip--${size}`} style={backgroundColor && { backgroundColor }} {...props}>
        {label}
      </span>
    )}
  </>
);

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.oneOf(["Deporte", "Arte", "Música", "Ciencia", "Moda", "Viajes"]),
};

Badge.defaultProps = {
  backgroundColor: "lightgreen",
  size: "small",
  label: "Regalo",
};
