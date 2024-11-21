import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

import Spinner from "../components/Spinner";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";

// Home page component
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  // Called at startup (mounting of component) to load book data.
  // For this demo: Sets loading, uses axios to get dummy data from the data.json
  // file storing this in the state variable 'books' for display in the selected
  // display component (table/card grid).
  // Typically: Sets loading, uses axios to make a GET request to the server, storing
  // the response in the state variable 'books' for display in the selected
  // display component (table/card grid) if the request succeeds.
  useEffect(() => {
    setLoading(true);

    axios
      .get("../mern-bookstore/data.json")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    // axios
    //   .get("http://localhost:5555/books")
    //   .then((response) => {
    //     setBooks(response.data.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //   });
  }, []);

  return (
    <div className="p-4">
      {/* View-type select container */}
      <div className="flex justify-center items-center gap-x-4">
        {/* Table view-type selector */}
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-xg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>

        {/* Card view-type selector */}
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-xg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        {/* Title */}
        <h1 className="text-3xl my-8">Books List</h1>

        {/* Create new book button */}
        <Link to="/mern-bookstore/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {/* Content area */}
      {loading ? (
        // Show spinner if loading
        <Spinner />
      ) : showType === "table" ? (
        // Display table if view-type = 'table'
        <BooksTable books={books} />
      ) : (
        // Display card grid if view-type != 'table'
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
