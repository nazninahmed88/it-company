import React from 'react';
import './uiux.css'

const Uiux = () => {
    return (
        <div className='container mt-3 text-light'>
        <div className='row g-4 '>
        <div className=' col-lg-4 mt-5 bg-dark text-light'>
        <h2 className='text-start'>Category</h2> <br /> 
            <div className='mega-box'>
                 <p className='text-start bg-color rounded-pill px-1'> Visual design</p>
                <p className='text-start bg-color rounded-pill px-1'>Agile</p>
                <p className='text-start bg-color rounded-pill px-1'>Prototyping</p>
                

            
            </div>
                <button type="submit"  className='submitt mt-1'>Submit</button>
                <br /> <br />
               
        </div>

       
        <div className=' col-lg-5 ms-3 mt-5 bg-dark'>
<br /> 


           <form action="">
           <select class="form-select" aria-label="Default select example">
  <option selected>Visual design</option>
  <option value="1">Agile</option>
  <option value="2">Prototyping</option>
  
  
</select>
<br /> <br />
           <div class="mb-3">
             <label for="form-control-sm" class="form-label text-start">Quantity :   </label>
            < input  type="number" class="" />
        </div>
        <div class="mb-3">
        <label for="form-control-sm" class="form-label text-start">Charge  :  </label>
            < input type="number" class="" />
        </div>

                <button type="submit"  className='submitt mt-1'>Submit</button>
           </form>
           
   
            
         </div>
        </div>
    </div>
    );
};

export default Uiux;