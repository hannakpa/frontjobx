import React from "react";
import Page from "./Page";

export default {
  title: "Global/Page",
  component: Page,
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: { type: "radio" },
    },
  },
};
///plantillaCarta recibe los datos que le paso a los argumentos. estos argumentos los imprime el Carta.jsx según lo que yo le pida
const PlantillaCarta = (args) => <Page {...args} />;

export const Plantilla = PlantillaCarta.bind({});
Plantilla.args = {
  data: [
    {
      title: "Crew",
      desc: "Lista de regalos para el grupo Crew",
      tags: ["Deporte"],
    },
    {
      title: "Family",
      desc: "Lista de regalos para el grupo Family",
      tags: ["Moda", "Ciencia"],
    },
    {
      title: "Friends",
      desc: "Lista de regalos para el grupo Friends",
      tags: ["Arte", "Musica", "Viajes"],
    },
    {
      title: "Friends 2",
      desc: "Lista de regalos para el grupo Friends",
      tags: ["Arte", "Musica"],
    },
    {
      title: "Friends 3",
      desc: "Lista de regalos para el grupo Friends",
      tags: ["Arte", "Musica"],
    },
  ],
  direction: "row",
};
