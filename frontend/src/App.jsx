import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage.jsx";
import CreatePage from "./Pages/CreatePage.jsx";
import NoteDetailPage from "./Pages/NoteDetailPage.jsx";

const App = () => {
  return (
    <div data-theme="coffee">
      <button class="btn btn-primary">One</button>
      <button class="btn btn-secondary">Two</button>
      <button class="btn btn-accent btn-outline">Three</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
