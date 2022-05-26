import React from "react";
import { Stepper } from "../../components";
import "./style.css";

function Home() {
  return (
    <div className="container-home">
      <h1 className="title">Stepper</h1>
      {/* // div para rederizar o componente  */}
      <Stepper />
      <footer>
        Created by{" "}
        <a
          className="link"
          href="https://www.linkedin.com/in/andrey-borges-143231233/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Andrey Airson
        </a>
      </footer>
    </div>
  );
}

export default Home;
