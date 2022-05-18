import React from "react";
import PropTypes from "prop-types";
import "./page.css";
import { Carta } from "./Carta";
import { Titulo } from "./Titulo";

///En Page se imprime el componente de Título (al que se le pasa la propiedad de texto) y se envuelve las Cartas (recibo su contenido desde Page.stories.jsx) dentro de un elemento section. La clase de la section dependerá de los parámetros que se elijan en el control (row o column. Por defecto la vista es un row).
function Page({ args, data, direction, ...props }) {
  return (
    <div>
      <Titulo label={"Mis regalos"} />
      <section className={`responsive-box--${direction}`} {...props}>
        {data.map((obj, index) => (
          <Carta {...props} label={obj} key={index} />
        ))}
      </section>
    </div>
  );
}

//definición de los tipos de propiedad
Page.PropTypes = {
  direction: PropTypes.oneOf(["row", "column"]),
};

////estilo por defecto. La función Page recibe esta propiedad direction y busca su coincidencia en page.css
Page.defaultProps = {
  direction: "row",
};

export default Page;
