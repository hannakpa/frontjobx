import React from "react";

import { Carta } from "./Carta";
import { TituloCarta } from "./TituloCarta";

export default {
  title: "Body/Carta",
  component: Carta,
};

const Plantilla = ({ data, ...args }) => (
  <>
    {data.map((obj, index) => (
      <Carta {...args} label={obj.title} key={index}></Carta>
    ))}
  </>
);

// export const Size = Plantilla.bind({});
// Size.args = {
//   label: "Escribe tu título",
//   size: "sm",
//   desc: "Descripcion",
// };

export const Lista = Plantilla.bind({});
Lista.args = {
  data: [
    {
      title: "Crew",
      desc: "Lista de regalos para el grupo Crew",
    },
    {
      title: "Family",
      desc: "Lista de regalos para el grupo Family",
    },
    {
      title: "Friends",
      desc: "Lista de regalos para el grupo Friends",
    },
  ],
  size: "sm",
};
