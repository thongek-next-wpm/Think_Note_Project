import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  //   console.log(req.ip);
  try {
    const { success, remaining, reset } = await ratelimit.limit(
      "RateLimit" + req.ip,
    );
    if (!success) {
      return res.status(429).json({
        error: "Too many requests. Please try again later.",
        remaining,
        reset,
      });
    }
    next();
  } catch (error) {
    console.error("error in rateLimiter middleware", error);
    res.status(500).json({ message: error.message });
  }
};

export default rateLimiter;
