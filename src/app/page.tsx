import MainSection from "./components/MainSection";
import React from "react";
import GallerySection from "./components/GallerySection";
import Menu from "./components/Menu";
import Offer from "./components/Offer";
import Contact from "./components/Contact";



export default function Home() {
  return (
    <>
      <MainSection />
      <GallerySection />
      <Menu />
      <Offer />
      <Contact />
    </>
  )
}
