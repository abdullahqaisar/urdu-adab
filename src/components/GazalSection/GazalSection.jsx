import React, { useState, useEffect } from "react";
import gazals from "../../data/gazals";
// import "./GazalSection.css"

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContentCard from "../Elements/ContentContainer/ContentCard.jsx";
import ContentContainer from "../Elements/ContentContainer/ContentContainer";

function GazalSection() {
  const heading = "مقبول غزلیں";
  const [gazalData, setGazalData] = useState([]);

  useEffect(() => {
    setGazalData(gazals);
  }, [setGazalData]);

  return (
    <>
      <ContentContainer heading={heading} />
      <Row className="row">
        {gazalData.map((gazal) => (
          <Col className="column">
            <ContentCard
              className="gazalCardImage"
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

export default GazalSection;
