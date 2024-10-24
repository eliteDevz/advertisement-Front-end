import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { apiEditProduct, apiGetSingleProduct } from "../services/product";

const EditAdvert = () => {
  const navigate = useNavigate();
  const [previousData, setPreviousData] = useState([]);

  const { id } = useParams();

  const getPrevData = async () => {
    const response = await apiGetSingleProduct(id);
    //  console.log(response.data);
    setPreviousData(response.data);
    //  console.log(previousData);
  };
  useEffect(() => {
    getPrevData();
  }, []);

  const editAd = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const response = await apiEditProduct(id, formData);
      console.log(response);
      // await axios.post(`${import.meta.env.VITE_BASE_URL}/edit_ad`, formData);

      Swal.fire({
        icon: "success",
        title: "Edited Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Failed to Edit Ad",
        text: "An error occurred while editing the ad. Please try again.",
      });
    }
  };

  return (
    <div className="h-[100%] mx-auto w-[70%] flex flex-col justify-center items-center gap-y-[2rem] py-[20px] bg-white">
      <h4 className="text-[2.2rem] font-medium text-[#e41e1b]">Edit Advert</h4>
      <form onSubmit={editAd}>
        <div>
          <label className="block font-bold mb-1 text-gray-700" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={previousData.title}
            placeholder="Place title of ad here"
            className="w-[100%] p-1 border mb-6 rounded"
            required
          />
        </div>
        <div>
          <label
            className="block font-bold mb-1 text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            // type="text"
            id="description"
            name="description"
            defaultValue={previousData.description}
            placeholder="Ad description here..."
            className="w-[100%] p-1 border mb-6 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-bold mb-1 text-gray-700" htmlFor="icon">
            Image
          </label>
          <input
            type="file"
            id="icon"
            name="image"
            // defaultValue={`https://savefiles.org/${previousData.icon}?shareable_link=448`}
            className="w-[100%] p-1 border mb-6 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-1 text-gray-700" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={previousData.price}
            min="0"
            step="0.50"
            placeholder="Price of item in USD"
            className="w-[100%] p-1 border mb-6 rounded"
            required
          />
        </div>
        <div>
          <label
            className="block font-bold mb-1 text-gray-700"
            htmlFor="category"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            defaultValue={previousData.category}
            placeholder="Enter category: Fashion, Property, events..."
            className="w-[100%] p-1 border mb-6 rounded"
            required
          />
        </div>
        <button className="mt-6 border-2 border-white bg-[#e41e1b] text-white px-4 py-2 rounded-lg w-[35%] hover:bg-red-600 hover:scale-110 transition-transform duration-300 ease-in-out">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditAdvert;
