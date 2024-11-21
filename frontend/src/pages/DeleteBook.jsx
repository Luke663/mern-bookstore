//import axios from "axios";
import { useState } from "react";
import { useNavigate /*, useParams */ } from "react-router-dom";
import { useSnackbar } from "notistack";

import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

// Page object. Allows user to confirm the deletion of a book.
const DeleteBook = () => {
  const [loading /*, setLoading */] = useState(false);

  //const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  // Deletes the selected book upon confirmation.
  // For this demo: Displays error snackbar informing user of cut functionality
  // and navigates to the home page.
  // Typically: Sets loading state to display loading spinner, sends DELETE
  // request via axios to the server, then notifies user of success/failure
  // via snackbar.
  const handelDeleteBook = () => {
    enqueueSnackbar("Delete functionality removed for demonstration.", {
      variant: "error",
    });
    navigate("/mern-bookstore/");

    // setLoading(true);

    // axios
    //   .delete(`http://localhost:5555/books/${id}`)
    //   .then(() => {
    //     setLoading(false);
    //     enqueueSnackbar("Book deleted successfully", { variant: "success" });
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
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
      <h1 className="text-3xl my-4">Delete Book</h1>

      {/* Shows spinner while the page waits for the server reponse (of delete request) */}
      {loading ? <Spinner /> : ""}

      {/* Confirm container */}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        {/* Confirmation prompt */}
        <h1 className="text-2xl">Are you sure you want to delete this book?</h1>

        {/* Confirmation button */}
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handelDeleteBook}
        >
          Yes, delete it.
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
