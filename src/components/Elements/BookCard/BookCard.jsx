import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./bookCard.module.css"

function BookCard() {
  return (
    <Col sm={3}>
      <Card className="card">
        <Card.Img
          className="image"
          variant="top"
          src="https://sm.mashable.com/mashable_pk/photo/default/faiz_sj29.png"
        />
        <Card.Body>
          <Card.Title>فیض احمد فیض</Card.Title>
          <Card.Text>گلوں میں رنگ بھرے باد نوبہار چلے</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BookCard;
