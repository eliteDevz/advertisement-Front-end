import PropTypes from "prop-types";
import { useState } from "react";
import ellipsis from '../assets/adCard/ellipsis.png'
import { Link } from "react-router-dom";

const VendorAdCard = ({ key, title, price, image }) => {
    const [hover, setHover] = useState(false)
    const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      key={key}
      className=" bg-white w-[100%] h-[170px]  flex rounded-[6px] shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <div className="image w-[44%] h-[100%] rounded-l-[6px] shadow-sm flex justify-center items-center overflow-hidden">
        <img
          src={image}
          alt="Image of ad"
          className="w-[100%] h-[100%] object-cover rounded-[inherit]  "
        />
      </div>
      <div className="text w-[56%] h-[100%] p-[20px] flex flex-col justify-center gap-y-[0.5rem] relative">
        <h5 className="font-medium">{title}</h5>
        <h4 className=" font-semibold text-[1.3rem] text-[#e41e1b]">{price}</h4>
        {hover && (
          <img
            src={ellipsis}
            alt="menu icon"
            className="h-[25px] absolute right-[20px] bottom-[20px]"
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          />
        )}
        {isClicked && (
          <ul className="bg-[#ffffff] w-[100px] h-[60px] absolute right-[30px] bottom-[50px] rounded-[10px]  shadow-lg">
            <Link to="/dashboard/edit-ad">
              <li className="h-[50%] px-[15px] hover:bg-[#e41e1b] hover:text-white rounded-t-[10px] flex items-center">
                <a href="#" className="text-gray-500 hover:text-white">
                  Edit
                </a>
              </li>
            </Link>
            <li
              className="h-[50%] px-[15px] hover:bg-[#e41e1b] hover:text-white rounded-b-[10px] flex items-center"
              onClick={() => deleteBook(targetID)} // Use deleteBook with targetID
            >
              <a href="#" className="text-gray-500 hover:text-white">
                Delete
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default VendorAdCard;

// Define prop types for props
VendorAdCard.propTypes = {
  title: PropTypes.string.isRequired, //
  image: PropTypes.string.isRequired, // coverImage is a required string (URL)
  price: PropTypes.string.isRequired,
  key: PropTypes.oneOfType([
    // targetID can be string or number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, // Required targetID for deleting the book
};
