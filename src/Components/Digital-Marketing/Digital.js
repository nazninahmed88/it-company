import React from 'react';
import Item from "./Item";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';






const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  
  ];
  

const Digital = () => {
    return (
        <div className='container boxs mt-5'>
        <h1> Digital Marketing</h1>
            
            
   <div class="">
   <div className="App">
   <Carousel breakPoints={breakPoints}>
     <Item>
     <div class="col">
       <div class="card boxs">
       <img height='200px' src="/images/facebook.png" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">Facebook Followers</h5>
           <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none'  to='/digitalcatagory'>Buy Now</Link></button>
       </div>
       </div>
     </div>
     </Item>
     <Item>
     <div class="col">
       <div class="card boxs">
       <img height='200px' src="/images/you.jpg" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">Youtube Followers </h5>
           <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none'  to='/digitalcatagory'>Buy Now</Link></button>
       </div>
       </div>
     </div>
     </Item>
     <Item>
     <div class="col">
       <div class="card boxs">
       <img height='200px' src="/images/instra.jpg" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title"> Instragram Followers </h5>
           <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none'  to='/digitalcatagory'>Buy Now</Link></button>
       </div>
       </div>
     </div>
     </Item>
     <Item> <div class="col">
       <div class="card boxs">
       <img height='200px' src="/images/yseo.png" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">Youtube SEO  </h5>
           <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none'  to='/digitalcatagory'>Buy Now</Link></button>
       </div>
       </div>
     </div></Item>
 
     <Item>
     <div class="card boxs">
     <img height='200px' src="/images/seoo.jpg" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">Website SEO</h5>
           <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none'  to='/digitalcatagory'>Buy Now</Link></button>
       </div>
       </div>
     </Item>
   
   
     
   </Carousel>
   </div>
   </div>
   </div>
    );
};

export default Digital;