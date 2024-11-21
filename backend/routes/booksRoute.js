import express from "express";

// Import the Book model to interact with the database
import { Book } from "../models/bookModel.js";

// Create a new router instance for handling "/books" routes
const router = express.Router();

// POST -> '/books'. To create a new book
router.post("/", async (request, response) => {
  try {
    // Validate input
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    )
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear.",
      });

    // Create a new book object with data from the request body
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    // Save the new book to the database
    const book = await Book.create(newBook);

    // Send a success response with the created book
    return response.status(201).send(book);
  } catch (error) {
    // Handle errors and send a 500 response
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// GET -> '/books'. To request all books
router.get("/", async (request, response) => {
  try {
    // Fetch all books from the database
    const books = await Book.find({});

    // Respond with the count of books and their data
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    // Handle errors and send a 500 response
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// GET -> '/books/ID'. To request a single book
router.get("/:id", async (request, response) => {
  try {
    // Extract the book ID from the request parameters
    const { id } = request.params;

    // Find the book in the database by ID
    const book = await Book.findById(id);

    // Respond with the book data
    return response.status(200).json(book);
  } catch (error) {
    // Handle errors and send a 500 response
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// PUT -> '/books/ID'. To update a book
router.put("/:id", async (request, response) => {
  try {
    // Validate input
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    )
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear.",
      });

    // Extract the book ID from the request parameters
    const { id } = request.params;

    // Update the book in the database
    const result = await Book.findByIdAndUpdate(id, request.body);

    // If no book is found, respond with a 404 error
    if (!result)
      return response.status(404).json({ message: "Book not found" });

    // Respond with a success message
    return response.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    // Handle errors and send a 500 response
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// DELETE -> '/books/ID'. To delete a book
router.delete("/:id", async (request, response) => {
  try {
    // Extract the book ID from the request parameters
    const { id } = request.params;

    // Delete the book from the database
    const result = await Book.findByIdAndDelete(id);

    // If no book is found, respond with a 404 error
    if (!result)
      return response.status(404).json({ message: "Book not found" });

    // Respond with a success message
    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    // Handle errors and send a 500 response
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// Export the router
export default router;
