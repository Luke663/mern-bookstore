import { Link } from "react-router-dom";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";

import BookModal from "./BookModal";

import PropTypes from "prop-types";

// Card component to display books as cards.
// Displays the single book passed as a property as a book.
const BooksSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    // Card container
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      {/* Date published */}
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
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

      {/* Button container */}
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        {/* Show modal button */}
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />

        {/* Show details button */}
        <Link to={`/mern-bookstore/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>

        {/* Edit button */}
        <Link to={`/mern-bookstore/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>

        {/* Delete button */}
        <Link to={`/mern-bookstore/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>

      {/* Modal object */}
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

BooksSingleCard.propTypes = {
  book: PropTypes.object, // Book to be displayed in card
};

export default BooksSingleCard;
