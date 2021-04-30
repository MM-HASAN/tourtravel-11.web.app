import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Row className="header text-danger">
      <Col className="logo" md={6}>
        <h1> TourANDTravel</h1>
      </Col>

      <Col className="header-nav" md={6}>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
          </ul>
        </nav>
      </Col>

      <Col className="text-center text-danger">
        <h1> Tour and Travel</h1>
        <p style={{ letterSpacing: "10px" }}>Provide your happines journey</p>
      </Col>
    </Row>
  );
};

export default Header;
