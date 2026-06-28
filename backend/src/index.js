import express from "express";
import notesRoutes from "./routes/notesRoutes.js";


const app = express();

// What is  an Endpoint?
// An endpoint is a URL where an API can be accessed by a client application.
// It is the point of entry in a communication channel when two systems are interacting.
// In the context of web APIs, an endpoint typically refers to a specific URL that corresponds to a particular resource or functionality provided by the API.

app.use("/api/notes", notesRoutes);

app.listen(3000, () => {
  console.log("Server started on PORT : 3000");
});
