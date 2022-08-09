import "./home.scss";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSearchParams, useNavigate } from "react-router-dom";

function Home() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    //console.log(params.get("email"));
    if (!params.get("email")) {
      navigate("/");
    }
  }, []);

  return (
    <React.Fragment>
      <Row className="pt-5 pb-3 mt-5">
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
          xl={{ span: 6, offset: 3 }}
          xxl={{ span: 6, offset: 3 }}
        >
          <h3 className="title-style pb-2">
            Bienvenido, {params.get("name")}.
          </h3>
          <h5 className="text-white  ">
            Acabamos de enviarte un correo de bienvenida a la dirección con la
            que te has registrado: {params.get("email")}
          </h5>
          <h5 className="pt-3 text-white"> Comprueba tu bandeja de entrada.</h5>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Home;
