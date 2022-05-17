import React from "react";

import { TituloCarta } from "./TituloCarta";

export default {
  title: "Example/Title",
  component: TituloCarta,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <TituloCarta {...args} />;

export const Black = Template.bind({});
Black.args = {
  label: "Escribe tu título",
  color: "black",
};
