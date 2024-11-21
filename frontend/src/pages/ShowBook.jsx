import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

// Page object. Allows user to view full information about a single book.
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  // Called upon the passing/alteration of the ID value in the dependencies array.
  // Loads the data of the book to display.
  // For this demo: Sets loading, uses axios to get dummy data from the data.json
  // file storing this in the state variable 'book' for display.
  // Typically: Sets loading, uses axios to make a GET request to the server storing
  // the response in the state variable 'book' for display if the request succeeds.
  useEffect(() => {
    setLoading(true);

    axios
      .get("/mern-bookstore/data.json")
      .then((response) => {
        const book = response.data.data.find((book) => book._id === id);
        setBook(book);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    // axios
    //   .get(`http://localhost:5555/books/${id}`)
    //   .then((response) => {
    //     setBook(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //   });
  }, [id]);

  return (
    <div className="p4">
      {/* Button to navigate back to home page */}
      <BackButton />

      {/* Header */}
      <h1 className="text-3xl my-4">Show Book</h1>

      {/* Conditionally displays the loading spinner if still loading or the page content */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          {/* Book ID info */}
          <div className="my-4">
            {/* Section header */}
            <span className="text-xl mr-4 text-gray-500">Id</span>
            {/* Section value */}
            <span>{book._id}</span>
          </div>

          {/* Book title */}
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>

          {/* Book author */}
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author}</span>
          </div>

          {/* Book publish date */}
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>

          {/* Book creation time */}
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>

          {/* Book last updated time */}
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
