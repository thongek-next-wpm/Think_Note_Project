import Navbar from "../components/Navbar";
import { useState } from "react";
import RateLimitedUI from "../components/RateLimitedUi";
const HomePage = () => {
  const [rateLimited, setRateLimited] = useState(true); // Simulating rate limit for demonstration purposes
  return (
    <div className="min-h-screen">
      <Navbar />
      {rateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;
