import React from 'react';
import './Category.css'

const Category = () => {
    return (
        <div className='container mt-3'>
            <div className='row g-4 '>
            <div className=' col-lg-4 mt-5 bg-dark text-light'>
            <h2 className='text-start'>Category</h2> <br /> 
                <div className='mega-box'>
                     <p className='text-start bg-color rounded-pill px-1'>Laravel Development</p>
                    <p className='text-start bg-color rounded-pill px-1'>Website Design & Re-design</p>
                
                </div>
                    <button type="submit"  className='submitt mt-1'>Submit</button>
                    <br /> <br />
                   
            </div>

            <div className=' col-lg-7 ms-3 mt-5 bg-dark'>
                   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni velit similique perspiciatis blanditiis nisi. Iste, illum reprehenderit dolores earum minus asperiores voluptas! Dignissimos autem accusantium, officiis sint quo sequi omnis ab vitae iste doloribus consectetur fuga quos obcaecati. Et, placeat? Aperiam facilis est doloremque ullam nulla aliquam tempora officiis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident eligendi voluptatum laudantium maxime recusandae mollitia animi aut aliquam sit praesentium natus, quisquam numquam consectetur odio inventore error magni atque ducimus?</p>
                    <button type="submit"  className='submitt mt-1'>Submit</button>
                    
                
             </div>
            </div>
        </div>
    );
};

export default Category;