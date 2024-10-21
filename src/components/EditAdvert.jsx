import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiEditProduct } from '../services/product';


const EditAdvert = () => {
    const navigate = useNavigate();

    const editAd = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData(e.target);
            const response = await apiEditProduct(formData)
            // await axios.post(`${import.meta.env.VITE_BASE_URL}/edit_ad`, formData);

           
            Swal.fire({
                icon: 'success',
                title: 'Edited Successfully',
                showConfirmButton: false,
                timer: 1500,
            });

        
            navigate('/ads');
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Failed to Edit Ad',
                text: 'An error occurred while editing the ad. Please try again.',
            });
        }
    };

    return (
        <div className='h-[100vh] w-[100vw] flex justify-center'>
            <form onSubmit={editAd}>
                <div>
                    <label className='block font-bold mb-1 text-gray-700' htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className='w-[100%] p-1 border mb-6 rounded'
                        required
                    />
                </div>
                <div>
                    <label className='block font-bold mb-1 text-gray-700' htmlFor="description">Description</label>
                    <textarea
                        // type="text"
                        id="description"
                        name="description"
                        className='w-[100%] p-1 border mb-6 rounded'
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className='block font-bold mb-1 text-gray-700' htmlFor="icon">Image</label>
                    <input
                        type="file"
                        id="icon"
                        name="icon"
                        className='w-[100%] p-1 border mb-6 rounded'
                        required
                    />
                </div>
                <div>
                    <label className='block font-bold mb-1 text-gray-700' htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        min="0"
                        step="0.50"
                        className='w-[100%] p-1 border mb-6 rounded'
                        required
                    />
                </div>
                <div>
                    <label className='block font-bold mb-1 text-gray-700' htmlFor="category">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className='w-[100%] p-1 border mb-6 rounded'
                        required
                    />
                </div>
                <button className="mt-6 border-2 border-white bg-red-500 text-white px-4 py-2 rounded-lg w-[35%] hover:bg-red-600">
                    Edit
                </button>
            </form>
        </div>
    );
};

export default EditAdvert;
