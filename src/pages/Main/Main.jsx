import React from "react";
import "./main.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gazals from "../../data/gazals.js";
import books from "../../data/books.js";

import BookCard from "../../components/Elements/BookCard";
import GazalCard from "../../components/Elements/GazalCard";
import SectionHeading from "../../components/Elements/Section-Heading";
import Header from "../../components/Header";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";

export default function Main() {
  return (
    <Container fluid className="p-0">
      <TopNav />
      <Header />

      <SectionHeading heading="مقبول غزلیں" />
      <Row className="row">
        {gazals.map((gazal) => (
          <GazalCard
            key={gazal.key}
            title={gazal.title}
            imageSrc={gazal.imageSrc}
            writer={gazal.writer}
          />
        ))}
      </Row>

      <SectionHeading heading="نمائندہ کتابیں" />
      <Row className="row">
        {books.map((book) => (
          <BookCard
            key={book.key}
            title={book.title}
            writer={book.writer}
            image={book.image}
          />
        ))}
      </Row>
      <Footer />
    </Container>
  );
}
