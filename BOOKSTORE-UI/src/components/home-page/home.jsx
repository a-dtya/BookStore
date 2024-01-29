import React from "react";
import Categories from "./category/Categories";
import Hero from "./hero/hero-section";
import About from "./about/about-section";
import Contact from "./contact/contact-section";
import Tranding from "./tranding/tranding-section";
import Footer from "../footer/footer"


const Home = () => {
  return (
    <>
      <Hero/>
      <Categories/>
      <Tranding/>
      <About/>
      <Contact/>
      <Footer />
    </>
  );
};

export default Home;