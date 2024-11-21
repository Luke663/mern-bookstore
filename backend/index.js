import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { PORT, mongoDbURL } from "./config.js"; // PORT for server and MongoDB connection URL
import booksRoute from "./routes/booksRoute.js"; // Route handler for "/books" API endpoint

// Initialize the Express application
const app = express();

// Middleware for parsing JSON request body
app.use(express.json());

// Middleware to handle Cross-Origin Resource Sharing (CORS)
// Enables requests from other origins (e.g., a frontend running on a different domain or port)
app.use(cors());

// Example of custom CORS configuration
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: [ 'GET', 'POST', 'PUT', 'DELETE' ],
//     allowHeaders: [ 'Content-Type' ],
// }));

// Define a default GET route for the root URL ("/")
// Responds with a message when accessed
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to the MERN stack");
});

// Mount the "/books" route using the imported booksRoute handler
// All requests to "/books" will be handled by the booksRoute module
app.use("/books", booksRoute);

// Connect to the MongoDB database using Mongoose
mongoose
  .connect(mongoDbURL)
  .then(() => {
    console.log("App is connected to database.");

    // Start the Express server after successful database connection
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    // Log any errors encountered during database connection
    console.log(error);
  });
