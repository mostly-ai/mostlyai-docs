import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const VERCEL_ENV = process.env.VERCEL_ENV;
const ALGOLIA_CRAWLER_ID = process.env.ALGOLIA_CRAWLER_ID;
const ALGOLIA_CRAWLER_USER_ID = process.env.ALGOLIA_CRAWLER_USER_ID;
const ALGOLIA_CRAWLER_API_KEY = process.env.ALGOLIA_CRAWLER_API_KEY;
const ALGOLIA_AUTH = Buffer.from(ALGOLIA_CRAWLER_USER_ID+":"+ALGOLIA_CRAWLER_API_KEY).toString("base64");
const ALGOLIA_CRAWLER_API_URL = `https://crawler.algolia.com/api/1/crawlers/${ALGOLIA_CRAWLER_ID}/reindex`;

const triggerAlgoliaCrawler = async () => {
  try {
    if (VERCEL_ENV !== "production") {
      console.log(`Skipping Algolia crawler trigger since VERCEL_ENV=${VERCEL_ENV}`);
      return;
    }
    
    if (!ALGOLIA_CRAWLER_API_KEY) {
      throw new Error("ALGOLIA_CRAWLER_API_KEY is missing. Set it in your environment variables.");
    }

    const response = await axios.post(
      ALGOLIA_CRAWLER_API_URL,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${ALGOLIA_AUTH}`
        },
      }
    );

    console.log("Algolia Crawler Triggered:", response.data);
  } catch (error) {
    console.error("Error triggering Algolia crawler:", error.response?.data || error.message);
    process.exit(1); // Exit with error
  }
};

triggerAlgoliaCrawler();
