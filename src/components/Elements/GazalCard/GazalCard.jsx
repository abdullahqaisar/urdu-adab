import React from "react";
import Card from "react-bootstrap/Card";
import "./gazalCard.module.css";
import Col from "react-bootstrap/Col";

const GazalCard = (props) => {
  return (
    <Col md={2} className="column">
      <Card className="card">
        <Card.Img variant="top" className="cardImage" src={props.imageSrc} />
        <Card.Body>
          <Card.Title className="title">{props.title}</Card.Title>
          <Card.Text className="text">{props.writer}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GazalCard;
