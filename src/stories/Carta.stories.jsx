import React from "react";

import { Carta } from "./Carta";

export default {
  title: "Body/Carta",
  component: Carta,
};

const Template = (args) => <Carta {...args} />;

export const Size = Template.bind({});
Size.args = {
  label: "Escribe tu título",
  size: "sm",
  desc: "Descripcion",
};
