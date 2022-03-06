import React from 'react';
import './Services.css'

const Services = () => {
    return (
      <div className='mt-3'>
          <h1>Services</h1>
          
        <div className='container boxs my-5'>
         <div>
            <h2>What We Offer? </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, non.</p>
           <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
    <div class="card boxs boxes">
    <a className='alink'  href="/Webdev">
      <div class="card-body">
        <h5 class="card-title">Web Development</h5>
        
      </div>
      </a>
    </div>
  </div>
  <div class="col">
    <div class="card boxs boxes">
      <a className='alink'    href="/Graphic">
      <div class="card-body">
        <h5 class="card-title">Graphic Design</h5>
      </div>
      </a>
    </div>
  </div>
  <div class="col">
    <div class="card boxs boxes">
      <a className='alink'  href="/IosApp">
      <div class="card-body">
        <h5 class="card-title">Mobile App Development</h5>
      </div>
      </a>
    </div>
  </div>
  <div class="col">
    <div class="card boxs boxes">
   <a className='alink'   href="/Game">
   <div class="card-body">
        <h5 class="card-title">Digital Marketing</h5>
      </div>
   </a>
    </div>
  </div>
 </div>
</div>
<br />  <br /> 
        </div>
        </div>
    );
};

export default Services;