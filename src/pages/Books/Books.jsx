import React from "react";

import Container from "react-bootstrap/Container";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";

function Books() {
  return (
    <Container fluid className="p-0">
      <TopNav />
      <div>Books</div>
      <Footer />
    </Container>
  );
}

export default Books;
