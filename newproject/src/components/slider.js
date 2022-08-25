import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "./images/bg/bg-1.jpg"
import img2 from "./images/bg/bg-2.jpg"
import img3 from "./images/bg/bg-3.jpg"
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

export default function Slider() {
  const [products, setProducts] = useState([]);
  console.log("aagye");
  const fetchProducts = async () => {
    // const response = await axios.get("https://fakestoreapi.com/products");
    const images = [img1,img2,img3]
    setProducts(images);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    {products.length > 0 && (
      <div className="slide-container sliderCol">
        <div class="carousel-caption text-center slider-text">
            <h1>up to 45% off</h1>
            <p>This unique jewelry is handcrafted on the beautiful island of Nantucket using fine silver and semi
              precious stones.</p>
            <a href="#" class="main-btn">Shop now</a>
          </div> 
        <Slide style={{zIndex:"-1"}}>
         {products.map((product,index)=> (
            <div className="each-slide" key={index}>
              <img src={product} alt="gaiya" className="slider"/>
            </div>
          ))} 
        </Slide>
      </div>
  )}
  </>
  )
}
