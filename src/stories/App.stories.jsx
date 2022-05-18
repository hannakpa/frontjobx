import React from "react";
import App from "./App";
import { Carta } from "./Carta";
import { Titulo } from "./Titulo";

export default {
  title: "Global/App",
  component: App,
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: { type: "radio" },
    },
  },
};
///plantillaCarta recibe los datos que le paso a los argumentos. estos argumentos los imprime el Carta.jsx según lo que yo le pida
const PlantillaCarta = ({ data, args }) => <App {...args} data={data} />;
// export const Size = Plantilla.bind({});
// Size.args = {
//   label: "Escribe tu título",
//   size: "sm",
//   desc: "Descripcion",
// };

export const Lista = PlantillaCarta.bind({});
Lista.args = {
  data: [
    {
      title: "Crew",
      desc: "Lista de regalos para el grupo Crew",
      tags: ["Deporte", "Regalos"],
    },
    {
      title: "Family",
      desc: "Lista de regalos para el grupo Family",
      tags: ["Arte", "Regalos"],
    },
    {
      title: "Friends",
      desc: "Lista de regalos para el grupo Friends",
      tags: ["Arte", "Musica"],
    },
  ],
  direction: "row",
};
