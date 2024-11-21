// Import the mongoose library for MongoDB object modeling
import mongoose from "mongoose";

// Define a schema for the "Book" model. The schema outlines the
// structure and constraints of documents in the "Book" collection.
const bookSchema = mongoose.Schema(
  {
    // Specifies a data field of the book table
    title: {
      type: String, // Specifies the data type
      required: true, // Marks the field as required for successful table entry
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    // Automatically add "createdAt" and "updatedAt" timestamps to the schema
    timestamps: true,
  }
);

// Create and export a Mongoose model named "Book" based on the defined schema
// The model represents a collection in MongoDB, and enables CRUD operations
export const Book = mongoose.model("Book", bookSchema);
