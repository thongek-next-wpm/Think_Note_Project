import Navbar from "../components/Navbar";
import { useState } from "react";
import RateLimitedUI from "../components/RateLimitedUi";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import NoteCard from "../components/NoteCard";
// HomePage component that displays the main content of the application
const HomePage = () => {
  const [rateLimited, setRateLimited] = useState(false); // Simulating rate limit for demonstration purposes
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch notes from the backend API when the component mounts
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/notes");
        console.log(res.data);
        setNote(res.data);
        setRateLimited(false);
      } catch (error) {
        console.error("Error fetching notes:", error);
        console.log(error); // Log the response status code for debugging
        if (error.response?.status === 429) {
          setRateLimited(true); // Set rateLimited to true if the response status is 429 (Too Many Requests)
        } else {
          toast.error(
            "An error occurred while fetching notes. Please try again later.",
          );
        }
      } finally {
        setLoading(false); // Set loading to false after the request is completed
      }
    };
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      {rateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}
        {note.length > 0 && !loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {note.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
