import React from 'react';

const Mobilecatagory = () => {
    return (
        <div>
        <div className='container mt-3 text-light'>
<div className='row g-4 '>
<div className=' col-lg-4 mt-5 bg-dark text-light'>
<h2 className='text-start'>Category</h2> <br /> 
<div className='mega-box'>
     <p className='text-start bg-color rounded-pill px-1'>Payment system</p>
    <p className='text-start bg-color rounded-pill px-1'>Product delivery</p>
    <p className='text-start bg-color rounded-pill px-1'>React App</p>
   

  

    


</div>
<br /> <br />
    <button type="submit"  className='submitt mt-1'>Submit</button>
    <br /> <br />
   
</div>


<div className=' col-lg-5 ms-3 mt-5 bg-dark'>
<br /> 


<form action="">
<select class="form-select" aria-label="Default select example">
<option selected>Payment system</option>
<option value="1">Product delivery</option>
<option value="2">React App</option>




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

export default Mobilecatagory;