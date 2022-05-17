import React from "react";

import { TituloCarta } from "./TituloCarta";

export default {
  title: "Example/TituloCarta",
  component: TituloCarta,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = ({ titulo, args }) => <TituloCarta {...args} titulo={titulo} />;

export const Black = Template.bind({});
Black.args = {
  color: "black",
};

export const Red = Template.bind({});
Red.args = {
  color: "red",
};

export const Blue = Template.bind({});
Blue.args = {
  color: "blue",
};
