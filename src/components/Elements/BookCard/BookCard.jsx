import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BookCard() {
  return (
    <div className="col-md-4">
      <Card className="card">
        <Card.Img
          variant="top"
          src="https://sm.mashable.com/mashable_pk/photo/default/faiz_sj29.png"
        />
        <Card.Body>
          <Card.Title>فیض احمد فیض</Card.Title>
          <Card.Text>گلوں میں رنگ بھرے باد نوبہار چلے</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookCard;
