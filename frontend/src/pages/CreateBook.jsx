//import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading /*, setLoading */] = useState(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // Called upon activation of the 'Save' button to store the newly created book.
  // For this demo: Displays error snackbar informing user of cut functionality
  // and navigates to the home page.
  // Typically: Creates book from the current state variables, sets loading,
  // uses axios to make a POST request to the server to store the book, informs
  // the user, via snackbar, of the request's success/failure.
  const handleSaveBook = () => {
    enqueueSnackbar("Create functionality removed for demonstration.", {
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
    //   .post("http://localhost:5555/books", data)
    //   .then(() => {
    //     setLoading(false);
    //     enqueueSnackbar("Book created successfully", { variant: "success" });
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
      <h1 className="text-3xl my-4">Create Book</h1>

      {/* Display spinner if loading */}
      {loading ? <Spinner /> : ""}

      {/* Book detail input area */}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        {/* Title input */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        {/* Author name input */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        {/* Publish date input */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        {/* Save (POST to server) the new book button */}
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
