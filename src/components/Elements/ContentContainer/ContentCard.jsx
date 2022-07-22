import React from "react";
import Card from "react-bootstrap/Card";
import "./ContentCard.css"

function ContentCard(props) {
  return (
    <Card className="card">
      <Card.Img variant="top" className="cardImage" src={props.imageSrc} />
      <Card.Body>
        <Card.Title className="title">{props.title}</Card.Title>
        <Card.Text className="text">{props.writer}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ContentCard;
