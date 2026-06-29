import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// What is  an Endpoint?
// An endpoint is a URL where an API can be accessed by a client application.
// It is the point of entry in a communication channel when two systems are interacting.
// In the context of web APIs, an endpoint typically refers to a specific URL that corresponds to a particular resource or functionality provided by the API.

// Middleware to parse JSON request bodies
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server started on PORT : ${PORT}`);
});
