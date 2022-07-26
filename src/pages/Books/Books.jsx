import React from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";

function Books(props) {
  return (
    <Container fluid className="p-0">
      <TopNav />
      <Card className="card">
        <Card.Img variant="top" className="cardImage" src={props.imageSrc} />
        <Card.Body>
          <Card.Title className="title">{props.title}</Card.Title>
          <Card.Text className="text">{props.writer}</Card.Text>
        </Card.Body>
      </Card>
      <Footer />
    </Container>
  );
}

export default Books;
