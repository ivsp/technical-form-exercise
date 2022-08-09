import React from "react";
import { useSearchParams } from "react-router-dom";
function Home() {
  const [params] = useSearchParams();

  return (
    <React.Fragment>
      <div>
        <h1>PAGINA HOME</h1>
        <h5>
          Bienvenido, {params.get("name")}. Acabamos de enviarte un correo de
          bienvenida a la dirección con la que te has registrado:{" "}
          <span className="text-bold">{params.get("email")}.</span>
        </h5>
        <h5> Comprueba tu bandeja de entrada.</h5>
      </div>
    </React.Fragment>
  );
}

export default Home;
