import React from "react";

import { TituloCarta } from "./TituloCarta";

export default {
  title: "Example/Title",
  component: TituloCarta,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = ({ label, args }) => <TituloCarta {...args} label={label} />;

export const Black = Template.bind({});
Black.args = {
  color: "black",
};
