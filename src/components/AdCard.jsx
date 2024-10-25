import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AdCard = ({ key, title, price, image, id }) => {
  return (
    <div
      key={key}
      className=" bg-white w-[100%] h-[170px]  flex rounded-[6px] shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out"
    >
      <div className="image w-[44%] h-[100%] rounded-l-[6px] shadow-sm flex justify-center items-center overflow-hidden">
        <img
          src={`https://savefiles.org/${image}?shareable_link=463`}
          alt="Image of ad"
          className="w-[100%] h-[100%] object-cover rounded-[inherit]  "
        />
      </div>
      <div className="text w-[56%] h-[100%] p-[20px] flex flex-col justify-center gap-y-[0.5rem]">
        <Link to={`/ad-details/${id}`}>
          <h5 className="font-medium">{title}</h5>
        </Link>
        <Link to={`/ad-details/${id}`}>
          <h4 className=" font-semibold text-[1.3rem] text-[#e41e1b]">
            ${price}
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default AdCard;

// Define prop types for props
AdCard.propTypes = {
  title: PropTypes.string.isRequired, //
  image: PropTypes.string.isRequired, // coverImage is a required string (URL)
  price: PropTypes.string.isRequired,
  key: PropTypes.oneOfType([
    // targetID can be string or number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, // Required targetID for deleting the book
  id: PropTypes.oneOfType([
    // targetID can be string or number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, // Required targetID for deleting the book
};
