import "./register.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import { Formik } from "formik";
import { registerNewUser } from "../../functions/api.functions";
import { validateForm } from "../../functions/functions";
import RegisterForm from "../../components/register-form/register-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const [loading, setLoading] = useState(false);
  const [createdUser, setCreatedUser] = useState(false);
  const [conflict, setConflict] = useState(false);
  const navigate = useNavigate();

  async function registerUser(body, values) {
    setLoading(true);
    setConflict(false);
    const r = await registerNewUser(body);
    if (r.ok) {
      setLoading(false);
      setCreatedUser(true);
      setTimeout(() => {
        setCreatedUser(false);
        navigate(`/home/?name=${values.name}&email=${values.email}`);
      }, 2500);
    } else if (r.status === 409) {
      setConflict(true);
      setLoading(false);
    } else {
      setLoading(false);
      setCreatedUser(false);
    }
  }

  function submitFormData(values) {
    //console.log("en mi funcion", values);
    const body = new FormData();
    body.append("name", values.name);
    body.append("surname", values.surname);
    body.append("email", values.email);
    body.append("gender", values.gender);
    body.append("password", values.password);
    /**
     for (const value of body.entries()) {
      console.log(value);
    }
     */

    registerUser(body, values);
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
                createdUser={createdUser}
                conflict={conflict}
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
