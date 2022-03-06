import React from 'react';
import Item from './Item';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },

];

const Webdev = () => {





  return (
    <div className='container boxs mt-5'>
    <h1>Web Development
</h1>
       
<div class="">


    <div className="container  App">
      <Carousel breakPoints={breakPoints}>

            {/* ...........................one */}
        <Item> <div class="col">
    <div class="card boxs">
    <img height='200px' src="/images/banner.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Theme Development </h5>
       
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/webcatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div>
</Item>
        <Item>
        <div class="col">
    <div class="card boxs">
    <img height='200px' src="/images/fu.jpg" class="card-img-top" alt="..."/>
     
      <div class="card-body">
        <h5 class="card-title"> Plugun Development</h5>
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/webcatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div>
        </Item>

        <Item><div class="col">
          <div class="card boxs">
            <img height='200px' src="/images/login.jpg" class="card-img-top" alt="..."/>
               <div class="card-body">
             <h5 class="card-title">Ecommerce Solution</h5>
             <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/webcatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div></Item>


        {/* one.................. */}
        <Item><div class="col">
    <div class="card boxs">
    <img height='200px' src="/images/Android.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">PSD to Wordpress</h5>
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/webcatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div>
</Item>


           {/* three...................... */}
        <Item><div class="col">
    <div class="card boxs">
    <img height='200px' src="/images/cms.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">CMS Development </h5>
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/webcatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div></Item>
  <Item><div class="col">
    <div class="card boxs">
    <img height='200px' src="/images/ed.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Education Website </h5>
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/webcatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div></Item>
  <Item><div class="col">
    <div class="card boxs">
    <img height='200px' src="/images/blog.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Blog Website </h5>
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/webcatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div></Item>
  <Item><div class="col">
    <div class="card boxs">
    <img height='200px' src="/images/saas.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">SAAS Website </h5>
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/webcatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div></Item>
  <Item><div class="col">
    <div class="card boxs">
    <img height='200px' src="/images/news.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Newspaper Website </h5>
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/webcatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div></Item>
  <Item><div class="col">
    <div class="card boxs">
    <img height='180px' src="/images/cus.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Custom Website Development </h5>
        <button className='btn-success mb-4 buttonn'><Link className='text-light text-decoration-none' to='/webcatagory'>Buy Now</Link></button>
    </div>
    </div>
  </div></Item>
      </Carousel>
      <br />
    </div>
   
  </div>
  </div>
  );
};

export default Webdev;