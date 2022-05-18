import React from "react";
import PropTypes from "prop-types";
import "./carta.css";
///importación de otros componentes que se utilizarán dentro de Carta.
import { TituloCarta } from "./TituloCarta";
import { Badge } from "./Badge";

/////el componente Carta recibe los argumentos size y label. Según los datos que vengan, el componente se encargará de aplicar una clase u otra de carta.css y de imprimir la descriptión que trae label. También se pasará información del título al componente TituloCarta y el array de etiquetas que contenga label.tags
export const Carta = ({ size, label }) => (
  <div className={`storybook-card size--${size}`}>
    {/* <h1>{label.title}</h1> */}
    <TituloCarta titulo={label.title} />
    <p style={{ textAlign: "center" }}>{label.desc}</p>
    <Badge texto={label.tags} />
  </div>
);

//definición de los tipos de propiedad
///se puede elegir entre tres opciones de tamaño
Carta.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

///por defecto se imprimirá tamaño mediano de la tarjeta.
Carta.defaultProps = {
  size: "md",
};
