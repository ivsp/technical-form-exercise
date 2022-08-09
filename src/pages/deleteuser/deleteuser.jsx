import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { deleteDBUser } from "../../functions/api.functions";

function DeleteUser() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    //console.log(params.get("email"));
    if (!params.get("email")) {
      navigate("/");
    }
  }, []);

  async function deleteUser() {
    setIsDeleted(false);
    setIsError(false);
    const r = await deleteDBUser(params.get("email"));
    //console.log(r.ok);
    if (r.ok) {
      const data = await r.json();
      if (data) {
        //console.log(data);
        setUserData(data);
        setIsDeleted(true);
        setLoading(false);
      }
    } else {
      //gestionar errores
      setLoading(false);
      setIsError(true);
    }
  }

  const handleDelete = () => {
    deleteUser();
  };

  return (
    <React.Fragment>
      <Row className="pt-5 pb-3">
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
          xl={{ span: 6, offset: 3 }}
          xxl={{ span: 6, offset: 3 }}
        >
          <h5 className="text-lg-center">
            A continuación vas a borrar tu cuenta. Para confirmar, pulsa el
            siguiente botón.
          </h5>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
          xl={{ span: 6, offset: 3 }}
          xxl={{ span: 6, offset: 3 }}
        >
          {!loading ? (
            <Button
              onClick={handleDelete}
              variant="primary"
              style={{
                width: "100%",
              }}
            >
              Borrar usuario
            </Button>
          ) : (
            <Button
              onClick={handleDelete}
              variant="primary"
              style={{
                width: "100%",
              }}
            >
              <Spinner animation="border" variant="warning" size="sm" />
              {/* Arreglar para ver si puedo poner el spiner rojo. Ajustar textos y hacerlo responsive. */}
            </Button>
          )}
        </Col>
      </Row>
      {isError && (
        <Row className="pt-5 pb-3">
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 8, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, soffset: 3 }}
            xl={{ span: 6, offset: 3 }}
            xxl={{ span: 6, offset: 3 }}
          >
            <h5>
              No se ha encontrado ningun usuario en el sistema con el siguiente
              correo electrónico: {params.get("email")}
            </h5>
          </Col>
        </Row>
      )}
      {isDeleted && (
        <Row className="pt-5 pb-3">
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 8, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, soffset: 3 }}
            xl={{ span: 6, offset: 3 }}
            xxl={{ span: 6, offset: 3 }}
          >
            <h5>
              El usuario con los siguientes datos ha sido dado de baja en el
              sistema:
            </h5>
          </Col>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 8, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, soffset: 3 }}
            xl={{ span: 6, offset: 3 }}
            xxl={{ span: 6, offset: 3 }}
          >
            <ul>
              <li>Nombre: {userData?.name}</li>
              <li>Apellidos: {userData?.surname}</li>
              <li>Email: {userData?.email}</li>
            </ul>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
}

export default DeleteUser;
