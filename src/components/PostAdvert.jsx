import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiPostAd } from '../services/postAd';


const PostAdvert = () => {
    const navigate = useNavigate(); 

    const postAd = async (e) => { 
        e.preventDefault(); 
        try {
            const formData = new FormData(e.target);
            const response = await apiPostAd(formData)
    
            Swal.fire({
                icon: 'success',
                title: 'Post Added Successfully',
                showConfirmButton: false,
                timer: 1500
            });
        
                navigate('/ads');

        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Failed to Add Post',
                text: 'An error occurred while posting the ad. Please try again.',
            });
        }
    };

    return (
        <div className='h-[100vh] w-[100vw] flex justify-center'>
            <form onSubmit={postAd}>
                <div>
                    <h1 className='font-bold mb-6 text-2xl text-gray-700'>Post Advert</h1>
                    <label className='block text-gray-700 font-bold mb-1' htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-[100%] p-1 mb-6 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className='block text-gray-700 font-bold mb-1' htmlFor="description">
                        Description
                    </label>
                    <textarea
                        // type="text"
                        id="description"
                        name="description"
                        className="w-[100%] p-1 mb-6 border rounded"
                        rows="4"
                        required >
                    </textarea>
                </div>
                <div>
                    <label className='block text-gray-700 font-bold mb-1' htmlFor="image">
                        Image
                    </label>
                    <input
                        type="file"
                        id="icon"
                        name="icon"
                        className="w-[100%] p-1 mb-6 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className='block text-gray-700 font-bold mb-1' htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        min="0"
                        step="0.50"
                        className="w-[100%] p-1 mb-6 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className='block text-gray-700 font-bold mb-1' htmlFor="category">
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className="w-[100%] p-1 border rounded"
                        required
                    />
                </div>
                <button className="mt-6 border-2 border-white bg-red-500 text-white px-4 py-2 rounded-lg w-[35%] hover:bg-red-600">
                    Post
                </button>
            </form>
        </div>
    );
};

export default PostAdvert;
