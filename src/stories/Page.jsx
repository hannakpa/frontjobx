import React from "react";

//import { Header } from "./Header";
import "./page.css";

export const Page = () => {
  return (
    <body>
      {/* <Header user={user} onLogin={() => setUser({ name: "Jane Doe" })} onLogout={() => setUser(undefined)} onCreateAccount={() => setUser({ name: "Jane Doe" })} /> */}

      <section>
        {/* PONER AQUI LAS CARTAS */}
        <div className="tip-wrapper">
          <span className="tip">Tip</span>
        </div>
      </section>
    </body>
  );
};
