import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  // Called at start-up (mounting) to find the selected book by the passed ID property.
  // For this demo: Sets loading, uses axios to get dummy data from the data.json
  // file storing the book's details in the corresponding deconstructed state variables.
  // Typically: Sets loading, uses axios to make a GET request to the server storing
  // the response (specific book found by ID) in the corresponding deconstructed
  // state variables.
  useEffect(() => {
    setLoading(true);

    axios
      .get("/mern-bookstore/data.json")
      .then((response) => {
        const book = response.data.data.find((book) => book._id === id);

        setTitle(book.title);
        setAuthor(book.author);
        setPublishYear(book.publishYear);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    // axios
    //   .get(`http://localhost:5555/books/${id}`)
    //   .then((response) => {
    //     setTitle(response.data.title);
    //     setAuthor(response.data.author);
    //     setPublishYear(response.data.publishYear);

    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //   });
  }, [id]);

  // Called on 'Confirm' button activation to complete book edit.
  // For this demo: Displays error snackbar informing user of cut functionality
  // and navigates to the home page.
  // Typically: Creates book from the current state variables, sets loading,
  // uses axios to make a PUT request to the server to update the book, informs
  // the user, via snackbar, of the request's success/failure.
  const handleEditBook = () => {
    enqueueSnackbar("Edit functionality removed for demonstration.", {
      variant: "error",
    });
    navigate("/mern-bookstore/");

    // const data = {
    //   title,
    //   author,
    //   publishYear,
    // };

    // setLoading(true);

    // axios
    //   .put(`http://localhost:5555/books/${id}`, data)
    //   .then(() => {
    //     setLoading(false);
    //     enqueueSnackbar("Book updated successfully", { variant: "success" });
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.log(error);
    //     enqueueSnackbar("An error happened, please check console log.", {
    //       variant: "error",
    //     });
    //   });
  };

  return (
    <div className="p-4">
      {/* Button to navigate back to home page */}
      <BackButton />

      {/* Header */}
      <h1 className="text-3xl my-4">Edit Book</h1>

      {/* Display spinner if loading */}
      {loading ? <Spinner /> : ""}

      {/* Edit form container */}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        {/* Title edit box */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        {/* Author name edit box */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        {/* Publish date edit box */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        {/* Button to confirm edit opertaion */}
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default EditBook;
