import React from "react";
import Banner from "./banner";
import Button from "./button";
import Card from "./card";
import Properties from "./properties";
import Accordion from "./accordion";
import Getintuch from "./get_in_tuch";

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
    </>
  );
}

export default Index;
