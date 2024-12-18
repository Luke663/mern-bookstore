import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

import PropTypes from "prop-types";

// Modal pop-up providing a secondary method for viewing book information
// (currently not fully implemented).
const BookModal = ({ book, onClose }) => {
  return (
    // Overlay to darken the background (rest of app) and allow closing of modal by clicking outside its bounds
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      {/* Modal container */}
      <div
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl yexy-red-600 cursor-pointer"
          onClick={onClose}
        />

        {/* Date published with light red background */}
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>

        {/* Book ID */}
        <h4 className="my-2 text-gray-500">{book._id}</h4>

        {/* Book title with book icon */}
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>

        {/* Book author with person icon */}
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>

        {/* Sub-header */}
        <p className="mt-4">Temporary heading,</p>

        {/* Description */}
        <p className="my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

BookModal.propTypes = {
  book: PropTypes.object, // Book object to be displayed
  onClose: PropTypes.func, // Callback to close the modal
};

export default BookModal;
