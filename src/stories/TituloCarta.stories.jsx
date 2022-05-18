import React from "react";
import { TituloCarta } from "./TituloCarta";

///Titulo de la carta
//////organización en Storybook. Carpeta Partes>Carta>TituloCarta
export default {
  title: "Partes/Carta/TituloCarta",
  component: TituloCarta,
  argTypes: {
    color: { control: "color" },
    fontSize: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

///el componente TituloCarta recibe los argumentos de titulo, color y fontSize.
const Template = (args) => <TituloCarta {...args} />;

///hay dos stories: Black y Grey
export const Black = Template.bind({});
Black.args = {
  titulo: "Soy un título negro por defecto",
  color: "black",
  fontSize: "md",
};

export const Grey = Template.bind({});
Grey.args = {
  titulo: "Soy un título gris",
  color: "grey",
  fontSize: "md",
};
