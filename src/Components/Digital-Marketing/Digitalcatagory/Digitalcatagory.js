import React from 'react';

const Digitalcatagory = () => {
    return (
        <div>
        <div className='container mt-3 text-light'>
<div className='row g-4 '>
<div className=' col-lg-4 mt-5 bg-dark text-light'>
<h2 className='text-start'>Category</h2> <br /> 
<div className='mega-box'>
     <p className='text-start bg-color rounded-pill px-1'>Social Media Marketing</p>
    <p className='text-start bg-color rounded-pill px-1'>Affiliate Marketing</p>
    <p className='text-start bg-color rounded-pill px-1'>Marketing Strategy Development</p>
    <p className='text-start bg-color rounded-pill px-1'>Search Engine Marketing (SEM)</p>
   

  

    


</div>
<br /> <br />
    <button type="submit"  className='submitt mt-1'>Submit</button>
    <br /> <br />
   
</div>


<div className=' col-lg-5 ms-3 mt-5 bg-dark'>
<br /> 


<form action="">
<select class="form-select" aria-label="Default select example">
<option selected>Social Media Marketing</option>
<option value="1">Affiliate Marketing</option>
<option value="2">Marketing Strategy Development</option>
<option value="3">Search Engine Marketing (SEM)</option>





</select>
<br /> <br /> <br />
<div class="mb-3">
 <label for="form-control-sm" class="form-label text-start">Quantity :   </label>
< input  type="number" class="" />
</div>
<div class="mb-3">
<label for="form-control-sm" class="form-label text-start">Charge  :  </label>
< input type="number" class="" />
</div>
<label for="form-control-sm" class="form-label text-start">Text    : </label>
<input type="textarea" name="" id="" />


<br />
    <button type="submit"  className='submitt mt-1'>Submit</button>
</form>



</div>
</div>
</div>
</div>
    );
};

export default Digitalcatagory;