import React from "react";
import PropTypes from "prop-types";
import "./badge.css";

///si hay un texto que viene del array de data en stories de Cartas, entonces se hace un map de este array (en cartas). Si no hay texto y quiero personalizar dentro de esta story, puedo elegir el texto que quiera en los controladores.
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

///El tipo de propiedades que presenta el coponente permite modificar el color de fondo, elegir entre opciones predefinidas el tamaño y el nombre de la etiqueta. Las opciones de nombre de la etiqueta bien podrían venir de una base de datos.
Badge.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.oneOf(["Deporte", "Arte", "Música", "Ciencia", "Moda", "Viajes"]),
};

///propiedades predefinidas
Badge.defaultProps = {
  backgroundColor: "lightgreen",
  size: "small",
  label: "Regalo",
};
