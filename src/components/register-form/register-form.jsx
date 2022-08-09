import "./register-form.scss";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import RegisterButton from "../register-button/register-button";

function RegisterForm({
  loading,
  createdUser,
  conflict,
  values,
  errors,
  touched,
  handleSubmit,
  handleChange,
  handleBlur,
}) {
  const [manOption, setManOption] = useState("gender-option");
  const [womanOption, setWomanOption] = useState("gender-option");
  const [otherOption, setOtherOption] = useState("gender-option");

  const changeManCSSClass = (e) => {
    e.stopPropagation();
    setManOption("gender-option-select");
    setWomanOption("gender-option");
    setOtherOption("gender-option");
  };
  const changeWomanCSSClass = (e) => {
    e.stopPropagation();
    setManOption("gender-option");
    setWomanOption("gender-option-select");
    setOtherOption("gender-option");
  };

  const changeOtherCSSClass = (e) => {
    e.stopPropagation();
    setManOption("gender-option");
    setWomanOption("gender-option");
    setOtherOption("gender-option-select");
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="nope">
      <Row>
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 4, offset: 0 }}
          xl={{ span: 5, offset: 0 }}
          xxl={{ span: 5, offset: 0 }}
        >
          <Form.Group className="mb-3" controlId="name">
            <Form.Label className="labels-styles">Nombre:</Form.Label>
            <Form.Control
              name="name"
              type="text"
              className="inputs-style"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="nombre"
              autocomplete="none"
            />
            {touched.name && errors.name && (
              <div
                className="small"
                style={{
                  color: " rgb(241, 53, 53)",
                }}
              >
                {errors.name}
              </div>
            )}
          </Form.Group>
        </Col>
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
          xl={{ span: 6, offset: 0 }}
          xxl={{ span: 5, offset: 0 }}
        >
          <Form.Group className="mb-3" controlId="surname">
            <Form.Label className="labels-styles">Apellidos:</Form.Label>
            <Form.Control
              name="surname"
              type="text"
              className="inputs-style"
              value={values.surname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="apellidos"
              autocomplete="none"
            />
            {touched.surname && errors.surname && (
              <div
                className="small"
                style={{
                  color: " rgb(241, 53, 53)",
                }}
              >
                {errors.surname}
              </div>
            )}
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
          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="labels-styles">Email:</Form.Label>
            <Form.Control
              name="email"
              type="email"
              className="inputs-style"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              autocomplete="none"
            />
            {touched.email && errors.email && (
              <div
                className="small"
                style={{
                  color: " rgb(241, 53, 53)",
                }}
              >
                {errors.email}
              </div>
            )}
          </Form.Group>
          <Form.Control
            name="email"
            type="email"
            className="inputs-style"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            autocomplete="off"
            style={{
              display: " none",
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 6, offset: 0 }}
          md={{ span: 6, offset: 0 }}
          lg={{ span: 6, offset: 0 }}
          xl={{ span: 5, offset: 0 }}
          xxl={{ span: 5, offset: 0 }}
        >
          <Form.Group className="mb-3" controlId="password">
            <Form.Label className="labels-styles">Contraseña:</Form.Label>
            <Form.Control
              name="password"
              type="password"
              className="inputs-style"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="contraseña"
              autocomplete="off"
            />
            {touched.password && errors.password && (
              <div
                className="small"
                style={{
                  color: " rgb(241, 53, 53)",
                }}
              >
                {errors.password}
              </div>
            )}
          </Form.Group>
        </Col>
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 6, offset: 0 }}
          md={{ span: 6, offset: 0 }}
          lg={{ span: 6, offset: 0 }}
          xl={{ span: 5, offset: 1 }}
          xxl={{ span: 5, offset: 0 }}
        >
          <Form.Group className="mb-3" controlId="repeatpassword">
            <Form.Label className="labels-styles">
              Repita la contraseña:
            </Form.Label>
            <Form.Control
              name="repeatpassword"
              type="password"
              className="inputs-style"
              value={values.repeatpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="contraseña"
              autocomplete="nope"
            />
            {touched.repeatpassword && errors.repeatpassword && (
              <div
                className="small"
                style={{
                  color: " rgb(241, 53, 53)",
                }}
              >
                {errors.repeatpassword}
              </div>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Group controlId="checkbox">
          <Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              lg={{ span: 12, offset: 0 }}
              xl={{ span: 11, offset: 0 }}
              xxl={{ span: 11, offset: 0 }}
            >
              <Form.Label className="labels-styles">
                Indique su género:
              </Form.Label>
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              lg={{ span: 12, offset: 0 }}
              xl={{ span: 11, offset: 0 }}
              xxl={{ span: 10, offset: 0 }}
              className="d-flex gap-3"
            >
              <Form.Check
                id="male-option"
                name="gender"
                type="radio"
                value="man"
                onChange={handleChange}
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
              <Form.Check
                id="female-option"
                name="gender"
                type="radio"
                value="woman"
                onBlur={handleBlur}
                onChange={handleChange}
                style={{
                  display: "none",
                }}
              ></Form.Check>
              <Form.Label
                onClick={changeWomanCSSClass}
                for="female-option"
                className={womanOption}
              >
                Mujer
              </Form.Label>
              <Form.Check
                id="other-option"
                name="gender"
                type="radio"
                value="other"
                onChange={handleChange}
                style={{
                  display: "none",
                }}
              ></Form.Check>
              <Form.Label
                onClick={changeOtherCSSClass}
                for="other-option"
                className={otherOption}
              >
                Otro
              </Form.Label>
            </Col>

            {touched.gender && errors.gender && (
              <Col
                className="d-inline-block small"
                style={{
                  color: " rgb(241, 53, 53)",
                }}
              >
                {errors.gender}
              </Col>
            )}
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
              className="small labels-styles"
              type="checkbox"
              name="policy"
              value={values.policy}
              onBlur={handleBlur}
              onChange={handleChange}
              label="He leído y acepto los términos y condiciones y la Política de privacidad."
            />
            {touched.policy && errors.policy && (
              <div
                className="small"
                style={{
                  color: " rgb(241, 53, 53)",
                }}
              >
                {errors.policy}
              </div>
            )}
          </Form.Group>
        </Col>
      </Row>
      <RegisterButton
        loading={loading}
        createdUser={createdUser}
        conflict={conflict}
      ></RegisterButton>
    </Form>
  );
}

export default RegisterForm;
