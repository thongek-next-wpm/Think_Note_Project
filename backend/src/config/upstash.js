import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dontenv from "dotenv"; // Load environment variables from .env file
dontenv.config();

// Create a new RateLimiterRedis instance
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "20s"),
});

export default ratelimit;
