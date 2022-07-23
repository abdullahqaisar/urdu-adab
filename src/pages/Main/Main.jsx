import React from "react";
import "./Main.css";

import Container from "react-bootstrap/Container";

import GazalSection from "../../components/GazalSection";
import Header from "../../components/Header";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";
import BookSection from "../../components/BookSection/BookSection";

export default function Main() {
  return (
    <Container fluid className="p-0">
      <TopNav />
      <Header />
      <GazalSection />
      <BookSection />
      <Footer />
    </Container>
  );
}
