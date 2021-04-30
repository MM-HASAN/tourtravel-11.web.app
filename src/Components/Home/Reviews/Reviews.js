import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Reviews.css";
import client1 from "../../../images/clients/client1.jpg";
import client2 from "../../../images/clients/client2.jpg";
import client3 from "../../../images/clients/client3.jpg";

const Reviews = () => {
  return (
    <div>
      <section>
        <div className="section-title text-center">
          <h2> Clients Reviews</h2>
          <p> make a best plan of clients</p>
        </div>
      </section>
      <Row>
        <Col className="singleClient" md={4}>
          <div className="clientImg">
            <img src={client1} alt="img" />
          </div>
          <div className="client-details">
            <h2> David burger man </h2>
            <p>
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, dolor.
            </p>
          </div>
        </Col>
        <Col className="singleClient" md={4}>
          <div className="clientImg">
            <img src={client2} alt="img" />
          </div>
          <div className="client-details">
            <h2> Sr. Antheno Juniror </h2>
            <p>
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, dolor.
            </p>
          </div>
        </Col>
        <Col className="singleClient" md={4}>
          <div className="clientImg">
            <img src={client3} alt="img" />
          </div>
          <div className="client-details">
            <h2> Abjelano goldsmith </h2>
            <p>
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, dolor.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Reviews;
