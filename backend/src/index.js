import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/database.js";
import rateLimiter from "./middleware/rateLimiter.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// What is  an Endpoint?
// An endpoint is a URL where an API can be accessed by a client application.
// It is the point of entry in a communication channel when two systems are interacting.
// In the context of web APIs, an endpoint typically refers to a specific URL that corresponds to a particular resource or functionality provided by the API.

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
