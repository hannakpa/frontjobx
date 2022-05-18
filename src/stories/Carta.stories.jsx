import React from "react";
import { Carta } from "./Carta";

///organización en Storybook. Carpeta Partes>Carta
export default {
  title: "Partes/Carta",
  component: Carta,
};
///plantillaCarta recibe los datos que le paso a los argumentos. estos argumentos los imprime el Carta.jsx según lo que yo le pida
const PlantillaCarta = ({ data, ...args }) => (
  <>
    {data.map((obj, index) => (
      <Carta {...args} label={obj} key={index} />
    ))}
  </>
);

///en la story Lista puedo modificar los datos que ingreso para la creación de cada carta y también modificar su tamaño.
///Este array de data viene predefinido en el front en este caso, pero bien puede venir a partir de una consulta get a una base de datos con toda esta información.
export const Lista = PlantillaCarta.bind({});
Lista.args = {
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
  ],
  size: "sm",
};
