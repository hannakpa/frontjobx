import React from "react";
//import { within, userEvent } from "@storybook/testing-library";

import App from "./App";

export default {
  title: "Página/App",
  component: App,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Plantilla = (args) => <App {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

//////borra///////
export const Pagina = Plantilla.bind({});

Pagina.args = {
  data: [
    {
      title: "Crew",
      desc: "Lista de regalos para el grupo Crew",
      tags: ["Deporte", "Regalos"],
    },
    {
      title: "Family",
      desc: "Lista de regalos para el grupo Family",
      tags: ["Arte", "Regalos"],
    },
    {
      title: "Friends",
      desc: "Lista de regalos para el grupo Friends",
      tags: ["Arte", "Musica"],
    },
  ],
  size: "sm",
};

///titlo descripcion y tags
