import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/database.js";
import rateLimiter from "./middleware/rateLimiter.js";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from a .env file into process.env
dotenv.config();
// Create an instance of the Express application
const app = express();
// Define the port on which the server will listen for incoming requests
const PORT = process.env.PORT || 3000;

// What is  an Endpoint?
// An endpoint is a URL where an API can be accessed by a client application.
// It is the point of entry in a communication channel when two systems are interacting.
// In the context of web APIs, an endpoint typically refers to a specific URL that corresponds to a particular resource or functionality provided by the API.

// CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers that restricts web pages from making requests to a different domain than the one that served the web page. It is a mechanism that allows servers to specify who can access their resources and how they can be accessed.
app.use(cors({ origin: "http://localhost:5173" })); // Middleware to enable Cross-Origin Resource Sharing (CORS) for all routes

// Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the chain.
app.use(express.json()); // Middleware to parse incoming JSON requests

// Apply the rateLimiter middleware
app.use(rateLimiter);
// Our simple custom middleware
// app.use((req, res, next) => {
//   console.log("Middleware executed");
//   next();
// });

//routes
app.use("/api/notes", notesRoutes);

// Connect to MongoDB
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT : ${PORT}`);
  });
});
