import React from "react";
import gazals from "../../data/gazals";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContentCard from "../Elements/ContentContainer/ContentCard.jsx";
import ContentContainer from "../Elements/ContentContainer/ContentContainer";

function Gazals() {
  const heading = "مقبول غزلیں";
  return (
    <>
      <ContentContainer heading={heading} />
      <Row className="row">
        {gazals.map((gazal) => (
          <Col>
            <ContentCard
              key={gazal.key}
              title={gazal.title}
              imageSrc={gazal.imageSrc}
              writer={gazal.writer}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Gazals;
