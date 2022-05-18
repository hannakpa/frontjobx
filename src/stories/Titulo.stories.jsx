import React from "react";

import Titulo from "./Titulo";

export default {
  title: "Partes/Titulo",
  component: Titulo,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <Titulo {...args} />;

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
