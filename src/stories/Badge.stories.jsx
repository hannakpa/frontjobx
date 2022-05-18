import React from "react";
///importo el jsx de Badge
import { Badge } from "./Badge";

export default {
  title: "Partes/Carta/Badge", ///le doy titulo a la seccion que estara a la izquierda
  component: Badge,
  argTypes: {
    backgroundColor: { control: "color" },
    label: {
      options: ["Deporte", "Arte", "Música", "Ciencia", "Moda", "Viajes"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Badge {...args} />;

///las pestanas que habra a la izquierda
export const Primary = Template.bind({});
Primary.args = {
  label: "Elige el tag",
  backgroundColor: "lightgreen",
  size: "medium",
};
