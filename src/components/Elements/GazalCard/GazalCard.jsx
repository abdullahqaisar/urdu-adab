import React from "react";
import Card from "react-bootstrap/Card";
import "./GazalCard.css";
import Col from "react-bootstrap/Col";

function GazalCard() {
  return (
    <Col>
      <Card className="card">
        <Card.Img
          variant="top"
          className="cardImage"
          src="https://i.postimg.cc/fypgXS75/gazal-img.jpg"
        />
        <Card.Body>
          <Card.Title>وہ ہمسفر تھا مگر اُس سے ہمنوائی نہ تھی...</Card.Title>
          <Card.Text>نصیر ترابی</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default GazalCard;
