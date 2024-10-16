
import React from 'react'

const PostAdvert = (event) => {
    
        // try {
        //   event.preventDefault();
        //   const formData = new FormData(event.target);
        //   await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, formData);
        //   // navigate('/ads');
        // } catch (error) {
        //   console.log(error);
        // }
      
    



  return (
    <div className='h-[100vh] w-[100vw]'>
        <form onSubmit={postAd}>

            <div>
             <h1 className=' font-bold mb-2 text-gray-700'>Post an Add</h1>

             <label  className='text-gray-700 font-bold mb-1' htmlFor="title">
             </label>
             <input 
             type="text"
             id="title"
             className="w-full p-1 border rounded"
             required
              />

        </div>


            


            






        </form>


        
     




    </div>
  )
};

export default PostAdvert;