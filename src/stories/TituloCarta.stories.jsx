import React from "react";

import { TituloCarta } from "./TituloCarta";

export default {
  title: "Partes/TituloCarta",
  component: TituloCarta,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = ({ args, titulo }) => <TituloCarta {...args} titulo={titulo} />;

export const Black = Template.bind({});
Black.args = {
  titulo: "Soy un título negro por defecto",
  color: "black",
};

export const Red = Template.bind({});
Red.args = {
  titulo: "Soy un título rojo",
  color: "red",
};

export const Blue = Template.bind({});
Blue.args = {
  titulo: "Soy un título azul",
  color: "blue",
};
