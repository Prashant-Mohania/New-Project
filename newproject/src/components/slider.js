import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../images/bg/bg-1.jpg";
import img2 from "../images/bg/bg-2.jpg";
import img3 from "../images/bg/bg-3.jpg";
import "react-slideshow-image/dist/styles.css";

export default function Slider() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    // const response = await axios.get("https://fakestoreapi.com/products");
    const images = [img1, img2, img3];
    setProducts(images);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* {products.length > 0 && (
      <div className="slide-container sliderCol">
        <div className="carousel-caption text-center slider-text">
            <h1>up to 45% off</h1>
            <p>This unique jewelry is handcrafted on the beautiful island of Nantucket using fine silver and semi
              precious stones.</p>
            <a href="#" className="main-btn">Shop now</a>
          </div> 
        <Slide style={{zIndex:"-1"}}>
         {products.map((product,index)=> (
            <div className="each-slide" key={index}>
              <img src={product} alt="gaiya" className="slider"/>
            </div>
          ))} 
        </Slide>
      </div>
  )} */}

      <section id="home">
        <div
          id="carouselExampleControls"
          className="carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {products.map((product) => {
              return (
                <div key={product} className="carousel-item active">
                  <img src={product} className="d-block w-100" alt="img-1" />
                  <div className="carousel-caption text-center">
                    <h1>up to 45% off</h1>
                    <p>
                      This unique jewelry is handcrafted on the beautiful island
                      of Nantucket using fine silver and semi precious stones.
                    </p>
                    <a href="#" className="main-btn">
                      Shop now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div style={{ height: "8000px" }}></div>
      </section>
    </>
  );
}
