import React from "react";
//import { within, userEvent } from "@storybook/testing-library";

import { Page } from "./Page";

export default {
  title: "Página/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Plantilla = (args) => <Page {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

//////borra///////
export const Pagina = Plantilla.bind({});

///titlo descripcion y tags
