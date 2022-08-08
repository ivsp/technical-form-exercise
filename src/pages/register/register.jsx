import "./register.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import { Formik } from "formik";
import { registerNewUser } from "../../functions/api.functions";
import { validateForm } from "../../functions/functions";
import RegisterForm from "../../components/register-form/register-form";

function Register() {
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

  function submitFormData(values) {
    console.log("en mi funcion", values);
    const body = new FormData();
    body.append("name", values.name);
    body.append("surname", values.surname);
    body.append("email", values.email);
    body.append("gender", values.gender);
    body.append("password", values.password);
    for (const value of body.entries()) {
      console.log(value);
    }
    registerUser(body);
  }

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
          <Formik
            validate={(values) => validateForm(values)}
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              repeatpassword: "",
              gender: "",
              policy: false,
            }}
            onSubmit={(values) => {
              submitFormData(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => (
              <RegisterForm
                loading={loading}
                values={values}
                errors={errors}
                touched={touched}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
              ></RegisterForm>
            )}
          </Formik>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Register;
