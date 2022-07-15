import React from "react";
import "./main.css";
import BookCard from "../../components/Elements/BookCard";
import SectionHeading from "../../components/Elements/Section-Heading";
import Header from "../../components/Header";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  return (
    <div className="">
      <TopNav />
      <Header />
      <div className="m-6">
        <SectionHeading heading="مقبول غزلیں" />
        <div className="row">
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
        <Footer/>
      </div>
    </div>
  );
}
