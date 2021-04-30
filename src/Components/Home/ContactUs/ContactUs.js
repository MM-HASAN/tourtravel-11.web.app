import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./ContactUs.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import map from "../../../images/map.png";

const ContactUs = () => {
  return (
    <Container>
      <div className="section-title text-center">
        <h2> Contact Us</h2>
        <p>Just Contact to us and make a happy tour</p>
      </div>
      <Row>
        <Col md={6}>
          <form className="contactForm">
            <div class="form-row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email Address"
                />{" "}
                <input type="text" class="form-control" placeholder="Country" />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Contact Number"
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Post Code"
                />
              </div>
            </div>
            <Button className="btn btn-success text-center"> Submit </Button>
          </form>
        </Col>

        <Col md={6}>
          <div className="map">
            <p>wer are every where </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
