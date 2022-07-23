import React, { useState, useEffect } from "react";
import books from "../../data/books";
import "./BookSection.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContentCard from "../Elements/ContentContainer/ContentCard.jsx";
import ContentContainer from "../Elements/ContentContainer/ContentContainer";

function BookSection() {
  const heading = "نمائندہ کتابیں";
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    setBookData(books);
  }, [setBookData]);

  return (
    <>
      <ContentContainer heading={heading} />
      <Row className="row">
        {bookData.map((book) => (
          <Col className="column">
            <ContentCard
              className="bookCardImage"
              key={book.key}
              title={book.title}
              imageSrc={book.imageSrc}
              writer={book.writer}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default BookSection;
