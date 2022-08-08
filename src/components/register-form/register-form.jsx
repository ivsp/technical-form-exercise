import "./register-form.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import React, { useState } from "react";
import { registerNewUser } from "../../functions/api.functions";

function RegisterForm() {
  const [manOption, setManOption] = useState("gender-option");
  const [femaleOption, setFemaleOption] = useState("gender-option");

  const [loading, setLoading] = useState(false);

  async function registerUser(body) {
    setLoading(true);
    const r = await registerNewUser(body);
    if (r.ok) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validar los errores
    const body = new FormData(e.target);
    body.set("birthdate", new Date(e.target.birthdate.value).getTime());

    //NOTA: la fecha se manda como un string, en el back tengo que pasarla a number para guardarla en la base de datos
    for (const value of body.values()) {
      console.log(value);
    }
    for (const key of body.keys()) {
      console.log(key);
    }

    registerUser(body);
  };

  const changeManCSSClass = (e) => {
    e.stopPropagation();
    setManOption("gender-option-select");
    setFemaleOption("gender-option");
  };
  const changeFemaleCSSClass = (e) => {
    e.stopPropagation();
    setManOption("gender-option");
    setFemaleOption("gender-option-select");
  };
  return (
    <React.Fragment>
      <h1>FORMULARIO</h1>
      <Row>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 4, offset: 1 }}
          xl={{ span: 5, offset: 1 }}
          xxl={{ span: 5, offset: 1 }}
        >
          AQUI IRÁ INFORMACIÓN, IMAGENES, ALGO DE TEXTO...
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 5, offset: 1 }}
          xl={{ span: 5, offset: 0 }}
          xxl={{ span: 5, offset: 0 }}
        >
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                sm={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                lg={{ span: 4, soffset: 0 }}
                xl={{ span: 5, offset: 0 }}
                xxl={{ span: 5, offset: 0 }}
              >
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="nombre"
                    required
                  />
                </Form.Group>
              </Col>
              <Col
                xs={{ span: 12, offset: 0 }}
                sm={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                lg={{ span: 8, soffset: 0 }}
                xl={{ span: 6, offset: 0 }}
                xxl={{ span: 5, offset: 0 }}
              >
                <Form.Group className="mb-3" controlId="surname">
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control
                    name="surname"
                    type="text"
                    placeholder="apellidos"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                sm={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                lg={{ span: 12, offset: 0 }}
                xl={{ span: 6, offset: 0 }}
                xxl={{ span: 6, offset: 0 }}
              >
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </Form.Group>
              </Col>
              <Col
                xs={{ span: 6, offset: 0 }}
                sm={{ span: 5, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                lg={{ span: 5, offset: 0 }}
                xl={{ span: 4, offset: 1 }}
                xxl={{ span: 4, offset: 0 }}
              >
                <Form.Group className="mb-3" controlId="date">
                  <Form.Label>Fecha nacimiento</Form.Label>
                  <Form.Control name="birthdate" type="date" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group controlId="checkbox">
                <Row>
                  <Col
                    xs={{ span: 6, offset: 0 }}
                    sm={{ span: 5, offset: 1 }}
                    md={{ span: 4, offset: 2 }}
                    lg={{ span: 4, offset: 2 }}
                    xl={{ span: 5, offset: 1 }}
                    xxl={{ span: 4, offset: 1 }}
                  >
                    <Form.Check
                      id="male-option"
                      name="gender"
                      type="radio"
                      value="man"
                      style={{
                        display: "none",
                      }}
                    ></Form.Check>
                    <Form.Label
                      onClick={changeManCSSClass}
                      for="male-option"
                      className={manOption}
                    >
                      Hombre
                    </Form.Label>
                  </Col>
                  <Col
                    xs={{ span: 5, offset: 0 }}
                    sm={{ span: 5, offset: 0 }}
                    md={{ span: 4, offset: 0 }}
                    lg={{ span: 4, offset: 0 }}
                    xl={{ span: 4, offset: 0 }}
                    xxl={{ span: 3, offset: 0 }}
                    style={{
                      padding: "0px",
                    }}
                  >
                    <Form.Check
                      id="female-option"
                      name="gender"
                      type="radio"
                      value="female"
                      style={{
                        display: "none",
                      }}
                    ></Form.Check>
                    <Form.Label
                      onClick={changeFemaleCSSClass}
                      for="female-option"
                      className={femaleOption}
                    >
                      Mujer
                    </Form.Label>
                  </Col>
                </Row>
              </Form.Group>
            </Row>
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                sm={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                lg={{ span: 12, offset: 0 }}
                xl={{ span: 12, offset: 0 }}
                xxl={{ span: 12, offset: 0 }}
              >
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    className="small"
                    type="checkbox"
                    label="He leído y acepto los términos y condiciones y la Política de privacidad."
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                sm={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                lg={{ span: 12, offset: 0 }}
                xl={{ span: 11, offset: 0 }}
                xxl={{ span: 10, offset: 0 }}
              >
                {!loading ? (
                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      width: "100%",
                    }}
                  >
                    REGISTRO
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      width: "100%",
                    }}
                  >
                    <Spinner animation="border" variant="light" color="white" />
                  </Button>
                )}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default RegisterForm;
