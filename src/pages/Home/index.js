import React from "react";
import Banner from "./banner";
import Button from "./button";
import Card from "./card";
import Properties from "./properties";
import Accordion from "./accordion";
import Getintuch from "./get_in_tuch";
import Footer from "../../components/Footer";
import CarouselSection from "./carosal";
import CardCarosal from "./cardCarosal";

function Index() {
  return (
    <>
      {/* banner section  */}
      <Banner />
      {/* button section  */}
      <Button />
      {/* card section  */}
      <Card />
      {/* Properties */}
      <Properties />
      {/* Accordion  */}
      <Accordion />
      {/* Getintuch */}
      <Getintuch />

      <CarouselSection />

      <CardCarosal />

      {/* footer  */}
      <Footer />
    </>
  );
}

export default Index;
