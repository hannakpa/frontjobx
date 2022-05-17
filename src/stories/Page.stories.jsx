import React from "react";
//import { within, userEvent } from "@storybook/testing-library";

import { Page } from "./Page";
import { Titulo } from "./Titulo";

export default {
  title: "Page/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Plantilla = ({ data, ...args }) => (
  <>
    <Titulo {...args} />

    {data.map((obj) => (
      <Carta {...args}>
        <TituloCarta {...args} label={obj.title} />
        <p>{obj.desc}</p>
      </Carta>
    ))}
  </>
);

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Lista = Plantilla.bind({});
Lista.args = {
  data: [
    {
      title: "Crew",
      desc: "Lista de regalos para el grupo Crew",
    },
    {
      title: "Family",
      desc: "Lista de regalos para el grupo Family",
    },
    {
      title: "Friends",
      desc: "Lista de regalos para el grupo Friends",
    },
  ],
};

///titlo descripcion y tags
