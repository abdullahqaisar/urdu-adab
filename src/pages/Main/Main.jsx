import React from "react";
import "./main.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <div className="m-6">
        <SectionHeading heading="مقبول غزلیں" />
        <Row>
          <GazalCard />
          <GazalCard />
          <GazalCard />
        </Row>
      </div>

      <div className="m-6">
        <SectionHeading heading="نمائندہ کتابیں" />
        <div className="row">
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
      <Footer />
    </Container>
  );
}
