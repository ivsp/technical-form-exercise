import "./register-button.scss";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

function RegisterButton({ loading, createdUser, conflict }) {
  return (
    <Row className="pb-5">
      <Col
        xs={{ span: 12, offset: 0 }}
        sm={{ span: 12, offset: 0 }}
        md={{ span: 12, offset: 0 }}
        lg={{ span: 12, offset: 0 }}
        xl={{ span: 11, offset: 0 }}
        xxl={{ span: 10, offset: 0 }}
      >
        {createdUser && (
          <p className=" text-center pt-2 text-success">
            El usuario ha sido creado correctamente.
          </p>
        )}
        {conflict && (
          <p className=" text-center pt-2 text-warning ">
            El usuario ya ha sido registrado con ese email.
          </p>
        )}
        {!loading ? (
          <Button
            className="register-button-style"
            variant="secondary"
            type="submit"
          >
            REGISTRO
          </Button>
        ) : (
          <Button
            className="register-button-style"
            variant="secondary"
            type="submit"
          >
            <Spinner animation="border" variant="primary" size="sm" />
          </Button>
        )}
      </Col>
    </Row>
  );
}

export default RegisterButton;
