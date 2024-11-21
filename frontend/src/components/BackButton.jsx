import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import PropTypes from "prop-types";

// The BackButton component renders a styled button that navigates to a specified route.
// It displays a back arrow icon and links to the `destination` prop.
const BackButton = ({ destination = "/mern-bookstore/" }) => {
  return (
    // Wrapper div for flexbox styling to align the button.
    <div className="flex">
      {/* Link component for navigation. The `to` prop defines the destination route. */}
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        {/* Back arrow icon styled with a larger font size. */}
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

BackButton.propTypes = {
  destination: PropTypes.string, // Where the button navigates to
};

export default BackButton;
