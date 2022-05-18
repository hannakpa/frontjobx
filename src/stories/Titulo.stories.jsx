import React from "react";

import { Titulo } from "./Titulo";

///Titulo global, de la página
//////organización en Storybook. Carpeta Partes>Titulo
export default {
  title: "Partes/Titulo",
  component: Titulo,
  argTypes: {
    color: { control: "color" },
  },
};

///el componente Titulo recibe los argumentos de label y color.
const Template = (args) => <Titulo {...args} />;

///hay tres stories: Red, Black y Blue
export const Red = Template.bind({});
Red.args = {
  label: "Escribe tu título",
  color: "red",
};

export const Black = Template.bind({});
Black.args = {
  label: "Escribe tu título",
  color: "black",
};

export const Blue = Template.bind({});
Blue.args = {
  label: "Escribe tu título",
  color: "blue",
};
