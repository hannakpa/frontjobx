import React from "react";
///importo el jsx de Badge
import { Badge } from "./Badge";

//////organización en Storybook. Carpeta Partes>Carta>Badge
export default {
  title: "Partes/Carta/Badge",
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
