import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

interface AlgoliaCrawlerConfig {
  appId: string;
  apiKey: string;
  crawlerId: string;
}

class AlgoliaCrawlerPostBuild {
  private config: AlgoliaCrawlerConfig;

  constructor() {
    // Validate required environment variables
    this.validateEnvironmentVariables();

    this.config = {
      appId: process.env.ALGOLIA_APP_ID!,
      apiKey: process.env.ALGOLIA_ADMIN_API_KEY!,
      crawlerId: process.env.ALGOLIA_CRAWLER_ID!
    };
  }

  private validateEnvironmentVariables() {
    const requiredEnvVars = [
      'ALGOLIA_APP_ID', 
      'ALGOLIA_ADMIN_API_KEY', 
      'ALGOLIA_CRAWLER_ID',
    ];

    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

    if (missingVars.length > 0) {
      console.error('Missing required environment variables:', missingVars);
      process.exit(1);
    }
  }

  private getAlgoliaCrawlerEndpoint(): string {
    return `https://crawler.algolia.com/api/1/crawlers/${this.config.crawlerId}/reindex`;
  }

  private getAuthHeaders() {
    return {
      'Content-Type': 'application/json',
      'X-Algolia-Application-Id': this.config.appId,
      'X-Algolia-API-Key': this.config.apiKey
    };
  }

  public async triggerCrawler() {
    try {
      console.log('🚀 Initiating Algolia Crawler Reindex...');

      const response = await axios.post(
        this.getAlgoliaCrawlerEndpoint(), 
        {
          url: process.env.SITE_URL,
          strategy: 'all'
        },
        {
          headers: this.getAuthHeaders(),
          timeout: 30000 // 30 seconds timeout
        }
      );

      console.log('✅ Algolia Crawler Reindex Triggered Successfully');
      console.log('Response:', {
        status: response.status,
        data: response.data
      });

    } catch (error) {
      this.handleCrawlerError(error);
    }
  }

  private handleCrawlerError(error: any) {
    console.error('❌ Algolia Crawler Reindex Failed');

    if (axios.isAxiosError(error)) {
      // Axios-specific error handling
      console.error('Error Details:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    } else {
      // Generic error handling
      console.error('Unexpected Error:', error);
    }

    // Optional: You might want to exit with a non-zero code to indicate build failure
    process.exit(1);
  }
}

// Run the crawler trigger
async function runAlgoliaCrawlerPostBuild() {
  try {
    const crawlerPostBuild = new AlgoliaCrawlerPostBuild();
    await crawlerPostBuild.triggerCrawler();
  } catch (error) {
    console.error('Post-build Algolia Crawler script failed:', error);
    process.exit(1);
  }
}

runAlgoliaCrawlerPostBuild();