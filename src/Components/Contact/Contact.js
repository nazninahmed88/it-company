import React from 'react';
import './Contact.css'


const Contact = () => {
    return (
        <div>
            <div className='container mt-4'>
            
            <div>
                <br />
       <h2  className='headline fs-1 text-start'> CONTACT US </h2>
       <div className="container  mt-5">
    
           <div className='row '>
           <div class="col-lg-5  col-12 mt-4  text-start">
           <br /> <br /> <br />
     
               <h3><i class="fa-solid fa-location-dot"></i> United Kingdom  </h3>
         
           <br />
           
         <h3><i class="fa-solid fa-envelope"></i> meetteachlab@gmail.com</h3>
              
               
           
           <br />
           
              
           
             </div>

           <div class="col-lg-6  col-12 mt-4 ">

           <form method="post">
               
               <br /> <br />
              <div class="row">
                   <div class="col-md-6">
                       <div class="form-group">
                           <input type="text" name="text" class="form-control" placeholder="Your Name*" />
                       </div>
                       <br />
                       <div class="form-group">
                         <input type="email" name="email" id="" className='form-control' placeholder='Your Email*' />
                       </div>
                       <br />
                       <div class="form-group">
                       <input type="number" name="" id="" className='form-control' placeholder='Your Number*' />
                       </div>
                       <br />
                     
                   </div>
                   <div class="col-md-6">
                       <div class="form-group">
                           <textarea style={{height:'180px', width:'100%'}}  name="txtMsg" class="form-control" placeholder='your Massage *'></textarea>
                       </div>
                       <br />
                       <div class="form-group">
                           <input className='submit' type="submit" value="Send Message" />
                       </div>
                   </div>
               </div>
           </form>


       
         </div>

        
           </div>
              
           
         
  

           </div>
       </div>

   
       
       <br /> <br />
       </div>
        </div>
    );
};

export default Contact;