import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { BiShow } from "react-icons/bi";

import PropTypes from "prop-types";

import BookModal from "./BookModal";

// Table component for displaying list of books
const BooksTable = ({ books }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalBook, setModalBook] = useState(undefined);

  // Sets the modal's info to be the selected book and makes modal visible
  const handleShowModal = (book) => {
    setModalBook(book);
    setShowModal(true);
  };

  return (
    <>
      <table className="w-full">
        {/* Table header */}
        <thead>
          {/* Row, (top of table) specifying column headers (<th>) */}
          <tr>
            <th className="border border-slate-600 rounded-md">No</th>
            <th className="border border-slate-600 rounded-md">Title</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Author
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Publish Year
            </th>
            <th className="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>

        {/* Table content */}
        <tbody>
          {/* Uses map to create an array from the retrieved books to fill the table */}
          {books.map((book, index) => (
            // Defined as row
            <tr key={book._id} className="h8">
              {/* Number */}
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>

              {/* Book title */}
              <td className="border border-slate-700 rounded-md text-center">
                {book.title}
              </td>

              {/* Book author */}
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.author}
              </td>

              {/* Publish date */}
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.publishYear}
              </td>

              {/* Controls (operations) */}
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  {/* Show modal button */}
                  <BiShow
                    className="text-3xl text-blue-800 hover:text-black cursor-pointer"
                    onClick={() => handleShowModal(book)}
                  />

                  {/* Show details button */}
                  <Link to={`/mern-bookstore/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>

                  {/* Edit book button */}
                  <Link to={`/mern-bookstore/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>

                  {/* Delete book button */}
                  <Link to={`/mern-bookstore/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <BookModal book={modalBook} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

BooksTable.propTypes = {
  books: PropTypes.array, // Books to be displayed in the table
};

export default BooksTable;
