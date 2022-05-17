import React from "react";
import { Titulo } from "./Titulo";
import { Carta } from "./Carta";
//import { Header } from "./Header";
import "./page.css";

export const Page = () => {
  return (
    <body>
      {/* <Header user={user} onLogin={() => setUser({ name: "Jane Doe" })} onLogout={() => setUser(undefined)} onCreateAccount={() => setUser({ name: "Jane Doe" })} /> */}

      <section>
        {/* PONER AQUI LAS CARTAS */}
        <div className="tip-wrapper">
          <Titulo />
          <Carta />
          <span className="tip">Tip</span>
        </div>
      </section>
    </body>
  );
};
