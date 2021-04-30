import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import mountain from "../../../images/s1.jpg";
import river from "../../../images/s2.jpg";
import air from "../../../images/s3.jpg";
import "./Services.css";
const Services = () => {
  const history = useHistory();
  const handlePlaceOrder = () => {
    history.push("/order");
  };
  return (
    <Container>
      <div className="section-title text-center">
        <h2> our services </h2>
        <p>make your life pleasure</p>
      </div>
      <Row>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={mountain}
              style={{ height: "200px" }}
            />
            <Card.Body>
              <Card.Title>Travel On Air</Card.Title>
              <Card.Title>Travel package price: $1000</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button onClick={handlePlaceOrder} variant="primary">
                {" "}
                placeOrder{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={air} />
            <Card.Body>
              <Card.Title>Go To Mountain</Card.Title>
              <Card.Title>Mountain package price: $999</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button onClick={handlePlaceOrder} variant="primary">
                placeOrder{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={river} />
            <Card.Body>
              <Card.Title>Your journey by boat</Card.Title>
              <Card.Title>Boat package price: $1100</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button onClick={handlePlaceOrder} variant="primary">
                {" "}
                placeOrder
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
