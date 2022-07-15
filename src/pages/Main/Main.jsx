import React from "react";
import "./main.css";
import Card from "../../components/Elements/Gazal-Card";
import SectionHeading from "../../components/Elements/Section-Heading";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <div className="m-4">
        <SectionHeading heading="مقبول غزلیں" />
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
