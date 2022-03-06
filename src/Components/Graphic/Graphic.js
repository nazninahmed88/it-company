
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




const Graphic = () => {
    return (
      
      <div className='container boxs mt-5'>
      <h1>Software Development</h1>
         
          
 <div class="">
 <div className="App">
 <Carousel breakPoints={breakPoints}>
   <Item>
   <div class="col">
     <div class="card boxs">
     
     <img height='200px' src="/images/manag.jpg" class="card-img-top" alt="..."/>
       <div class="card-body">
       <h5 class="card-title">Managment Software</h5>
         <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none'  to='/softwarecatagory'>Buy Now</Link></button>
     </div>
     </div>
   </div>
   </Item>
   <Item>
   <div class="col">
     <div class="card boxs">
     <img height='200px' src="/images/bus.jpg" class="card-img-top" alt="..."/>
       <div class="card-body">
       <h5 class="card-title">Business Software</h5>
       <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none'  to='/softwarecatagory'>Buy Now</Link></button>
     </div>
     </div>
   </div>
   </Item>
   <Item>
   <div class="col">
     <div class="card boxs">
     <img height='200px' src="/images/logo.png" class="card-img-top" alt="..."/>
       <div class="card-body">
       <h5 class="card-title">Export Import</h5>
       <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none'  to='/softwarecatagory'>Buy Now</Link></button>
     </div>
     </div>
   </div>
   </Item>
   <Item> <div class="col">
     <div class="card boxs">
     <img height='200px'  src="/images/stock.jpg" class="card-img-top" alt="..."/>
       <div class="card-body">
       <h5 class="card-title">Stock Software</h5>
       <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none'  to='/softwarecatagory'>Buy Now</Link></button>
     </div>
     </div>
   </div></Item>
 <Item>
 <div class="col">
     <div class="card boxs">
     
     <img height='200px' src="/images/sels.jpg" class="card-img-top" alt="..."/>
       <div class="card-body">
       <h5 class="card-title">Sales Software</h5>
       <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none'  to='/softwarecatagory'>Buy Now</Link></button>
     </div>
     </div>
   </div>
   </Item>



   
 </Carousel>
 </div>
 </div>
 </div>


    );
};

export default Graphic;



