import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";

const About = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const flexContainer = {
    display: "flex",
    flexDirection: "row", // Make it flex in a row
    justifyContent: "space-between", // Adjust as needed
  };

const containerStyle = {
  backgroundColor: "#EEDDBB",
  fontFamily: "Georgia, serif",
  textAlign: "left",
  paddingLeft: "10px",
  paddingTop: "50px",
  paddingBottom: "50px",
  borderRadius: "15px",
  transition: "box-shadow 0.5s ease-in-out, transform 0.3s ease-in-out",
  boxShadow: isHovered ? "0 10px 20px rgba(0, 0, 0, 0.2)" : "none",
  transform: "scale(1)",
  fontSize: "22px",
  maxWidth: "800px",
  margin: "10px",
  marginTop: "100px",
};
  const headingStyle = {
    color: "#000000",
    fontSize: "40px",
    marginTop: "0",
    fontWeight: "bold",
    textAlign: "left",
    transition: "color 0.5s ease-in-out",
  };

  const textStyle = {
    color: "#5e5e5e",
    fontFamily: "Georgia, serif",
    fontSize: "20px",
  };

  const carouselStyle = {
    width: "700px",
    height: "700px",
    margin: "100px",
    paddingTop: "150px",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "30px",
  };

  const sectionStyle = {
    marginTop: "70px", // Increase the top margin to move the carousel down further
  };

  return (
    <>
    <div
      role="main"
      className="container"
      style={flexContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="subcontainer">
        <div id="About" style={containerStyle}>
          <div className="heading d-flex flex-column align-items-start mb-5">
            <div>
              <h1 style={headingStyle}>About the Store</h1>
            </div>
            <div className="small"></div>
          </div>
          <h1></h1>
          <p
            className="text-dark text-left mt-4 fw-semibold"
            style={textStyle}
          >
            In our bookstore, we are dedicated to guiding visitors to discover
            the best books that match their taste and interests. You'll find a
            diverse collection of original books spanning various genres.
            Explore our three main sections:-Short Story Books for All
            Ages,English Books for All Ages,Children's Books
            Immerse yourself in the world of literature,
            where every book tells a unique story. Happy reading!
          </p>
        </div>
      </div>
      <section style={{ ...carouselStyle, ...sectionStyle }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block rounded"
              src="/assets/img/1.jpg"
              alt="First slide"
              style={imageStyle}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block rounded"
              src="/assets/img/3.jpg"
              alt="Second slide"
              style={imageStyle}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block rounded"
              src="/assets/img/2.jpg"
              alt="Third slide"
              style={imageStyle}
            />
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
    </>
  );
};

export default About;