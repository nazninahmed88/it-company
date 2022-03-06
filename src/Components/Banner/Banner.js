import React from 'react';
import './Banner.css'
import 'animate.css';
const Banner = () => {
    return (
        <div className=' bg-dark text-light'>
             <div className='row'>
                <div class='container  col-md-6  animate__animated animate__backInLeft'>
                    <br /> <br /> <br /> <br /> <br />
                    <div className='container'>
                    <h1 >Why Large iT ?? </h1>
                   

                    <p className='text-canter '>Large iT works in several IT sectors with skilled expert workforce. We possess the experience and expertise to help web entrepreneurs reach their customers across the digital space. We believe in minimizing the effort from the client and maximizing the value of services delivered. Our company is known to promote by some dedicated highly experienced professionals to provide whole IT solutions under one roof.</p>
                 
                    <select class="sete" aria-label="Default select example">
                <option selected > WEB DEVELOPMENT</option>
                <option value="1" >Software Development </option>
                <option value="2">Mobile App Development</option>
                <option value="3">Digital Marketing</option> 
            
</select> <button className='ms-2 bg-success botton text-light px-3 '> Start</button>
</div>
                </div>
                <div className='col-md-6'>
                    <div className=' container row  '>
                    <div className='col-5'>
                        <br /> <br /> <br />
                        <div className='row'>
                        <img className='banner'  src="/images/img-5.jpg" alt="" />
                        </div>
                     </div>
                        <div className='col-5'>
                            <br /> <br /> <br /> <br />
                          <div className='row mt-1'>
                          <img height='150px' className='rounded-pill' src="/images/banner-img3.jpg" alt="" />
                          </div>
                          <div className='row mt-2'>
                          <img height='150px' className='rounded-pill' src="/images/banner-img1.jpg" alt="" />
                          </div>
                        </div>
                    </div>

                </div>
             </div>
            
        </div>
    );
};

export default Banner;