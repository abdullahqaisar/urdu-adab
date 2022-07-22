import React from "react";
import ContentHeading from "./ContentHeading";

function ContentContainer(props) {
  return <ContentHeading heading={props.heading} >
    {props.heading}
  </ContentHeading>;
}

export default ContentContainer;
