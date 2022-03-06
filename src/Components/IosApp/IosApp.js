
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import Item from "./Item";
import "./style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },

];

const IosApp = () => {
  return (
    <div className='container boxs mt-5'>
            <h1>Mobile App Development </h1>
                
    <div class="">
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Item>
        <div class="col">
    <div class="card boxs">
    <img height='150px' width='150px' src="/images/ios2.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> Iphone App Development</h5>
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/mobilecatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div>
        </Item>
        <Item>
        <div class="col">
    <div class="card boxs">
    <img height='150px' width='150px' src="/images/mobile.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Android APP Development</h5>
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/mobilecatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div>
        </Item>
        <Item>
        <div class="col">
    <div class="card boxs">
    <img height='150px' width='150px' src="/images/renat.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">React Native Development</h5>
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/mobilecatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div>
        </Item>
        <Item><div class="col">
    <div class="card boxs">
    <img height='150px' width='150px' src="/images/hyb.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Hybrid App Development </h5>
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/mobilecatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div></Item>
 
   
        
      </Carousel>
    </div>
    </div>
    </div>
 
  );
};

export default IosApp;