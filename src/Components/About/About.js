import React from 'react';

const About = () => {
    return (
        <div className='mt-4 container '>
            <br /> <br />
           <h1> About </h1> 
    <div class="row row-cols-1 row-cols-md-2 g-4 Container">
         <div class="col">
             <br /> <br />
           
            <br /> <br />
            <h5 className='text-start ms-5'>the company provides softwares or web development and design solutions then it will also fall under the name 'IT Company'. They are specialized in Software, Applications and websites. Their skill or technology may vary. The most common software languages are HTML PHP .NET JAVA JS etc..</h5>
         </div>

        <div class="col">
            <img className=' animate__animated animate__backInRight' src="/images/about.jpg" alt="" />
        </div>
    </div>

            {/* card  */}

        <div className='container my-5'>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card boxs">
      <img  width='200px' height='180px' className='mx-auto' src="/images/icon1..png"  alt="..."/>
      <div class="card-body">
        <h4 class="card-title">Customers First</h4>
        <p class="card-text">When you build a solid customer relationship, the benefits are two-fold. First, they will continue to engage your business and buy your products or services. Second, they’re more likely to support you and your brand in other ways—like posting an online review or telling their friends and family about the positive experience they’ve had with your brand.</p>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card boxs">
      <img  width='200px' height='180px' className='mx-auto' src="/images/icon2.png"   alt="..."/>
      <div class="card-body">
        <h4 class="card-title">Performance & Collaboration</h4>
        <p class="card-text">SunView customers will continue to receive the best product and support services in the market. In addition to existing customer agreements, you will have an opportunity to take advantage of expanded product and service offerings that will deliver better service interaction and automation.</p>
      
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card boxs">
      <img width='200px' height='180px' className='mx-auto'  src="/images/icon3.png" alt="..."/>
      <div class="card-body">
        <h4 class="card-title">Partners and Relationships</h4>
        <p class="card-text">Developing relationships with other small businesses or business owners in your space is a great way to get your name in front of potential customers that are already receptive to your business model. By partnering with an established brand, you can leverage their already-existing business relationships to build trust in your brand—and attract new customers along the way.</p>
        
      </div>
    </div>
  </div>
 
</div>
</div>
</div>
    );
};

export default About;