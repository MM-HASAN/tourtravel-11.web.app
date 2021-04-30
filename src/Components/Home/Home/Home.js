import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./../Header/Header";
import "./Home.css";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <Container fluid>
      <Header></Header>
      <Services></Services>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
