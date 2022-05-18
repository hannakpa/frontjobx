import React from "react";

import { TituloCarta } from "./TituloCarta";

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

const Template = (args) => <TituloCarta {...args} />;

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
