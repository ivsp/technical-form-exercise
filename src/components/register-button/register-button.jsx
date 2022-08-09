import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

function RegisterButton({ loading, createdUser, conflict }) {
  return (
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
        {createdUser && (
          <p className=" text-center pt-2 ">
            El usuario ha sido creado correctamente.
          </p>
        )}
        {conflict && (
          <p className=" text-center pt-2 ">
            El usuario ya ha sido registrado con ese email.
          </p>
        )}
      </Col>
    </Row>
  );
}

export default RegisterButton;
