import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetSingleProduct } from "../services/product";
import detailsImage from "../assets/detailsImage.jpg" // Placeholder image


const MoreDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [ad, setAd] = useState(null); // State to store book details.


  useEffect(()=>{
    const getAdDetails = async () => {
       try {
         const response = await apiGetSingleProduct();
         setAd(response.data)
       } catch (error) {
        console.log(error)
        alert( "Error fetching book details:", error);
       }
    }  

    getAdDetails();
  }, [id])

  return (
    <div className="h-[100vh] w-[100vw] flex items-center text-gray-700 text-[0.8rem]">
      <section className="w-[60vw] mx-auto p-[5%]">
        <div
          id="detail-container"
          className="w-[100%] h-[100%] flex justify-between items-center"
        >
          <div id="left-side" className="w-[30%] h-[100%] flex items-center">
            <img
              className="w-[100%] h-[58vh]"
              src={ad.coverImage || detailsImage}
              alt={ad.title}
            />
          </div>

          <div id="right-side" className="w-[60%] h-[100%]">
            <h1 className="text-3xl font-bold">{ad.title}</h1>
            <span>by</span>{" "}
            <span className="font-bold">{ad.author?.name}</span>
            <p className="pt-[5%] italic">{ad.description}</p>
            <p className="pt-[5%]">{ad.longDescription}</p>
            <div className="flex flex-col-4 gap-9  pt-[10%]">
              <div>
                <h6 className="font-bold">Language</h6>
                <h6 className="font-bold pt-[5%]">Publisher</h6>
                <h6 className="font-bold pt-[5%]">Published date</h6>
              </div>

              <div>
                <h6>{ad.language || "English"}</h6>
                <h6 className="pt-[5%]">
                  {ad.publisher || "Unknown Publisher"}
                </h6>
                <h6 className="pt-[5%]">
                  {ad.publishedDate || "Unknown Date"}
                </h6>
              </div>

              <div>
                <h6 className="font-bold">Pages</h6>
                <h6 className="font-bold pt-[5%]">Genre</h6>
              </div>

              <div>
                <h6>{ad.pageCount || "N/A"} pp</h6>
                <h6>{ad.genre || "Unknown Genre"}</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MoreDetails;