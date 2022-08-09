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
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.get("email")) {
      navigate("/");
    }
  }, []);

  async function deleteUser() {
    setIsDeleted(false);
    const data = deleteDBUser(params.get("email"), setIsDeleted);
    setUserData(data);
  }

  const handleDelete = () => {
    //deleteUser();
    console.log(params.get("email"));
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <h5>
            A continuación vas a borrar tu cuenta. Para confirmar, pulsa el
            siguiente botón.
          </h5>
        </Col>
        {!loading ? (
          <Col>
            <Button
              onClick={handleDelete}
              variant="primary"
              style={{
                width: "100%",
              }}
            >
              Borrar usuario
            </Button>
          </Col>
        ) : (
          <Col>
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
          </Col>
        )}
      </Row>
      {isDeleted && (
        <Row>
          <Col>
            <h5>
              El usuario con los siguientes datos ha sido dado de baja en el
              sistema:
            </h5>
          </Col>
          <Col>
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
