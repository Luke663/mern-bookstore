import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";

const App = () => {
  return (
    // Sets out routes using "react-router-dom" to allow page switching
    <Routes>
      <Route path="/mern-bookstore/" element={<Home />} />
      <Route path="/mern-bookstore/books/create" element={<CreateBook />} />
      <Route path="/mern-bookstore/books/details/:id" element={<ShowBook />} />
      <Route path="/mern-bookstore/books/edit/:id" element={<EditBook />} />
      <Route path="/mern-bookstore/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
