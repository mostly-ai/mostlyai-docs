#!/bin/bash

# Check if we're in production (skip Algolia trigger for preview and dev)
if [ "$VERCEL_ENV" = "preview" ]; then
  echo "Production build detected. Triggering Algolia Crawler..."
  echo "ALGOLIA_CRAWLER_USER_ID: $ALGOLIA_CRAWLER_USER_ID"
  echo "ALGOLIA_CRAWLER_ID: $ALGOLIA_CRAWLER_ID"
  
  # Encode credentials for Basic Auth
  export AUTH_HEADER=$(echo -n "$ALGOLIA_CRAWLER_USER_ID:$ALGOLIA_CRAWLER_API_KEY" | base64)
  
  # Trigger the Algolia crawler
  curl -X POST -H "Authorization: Basic $AUTH_HEADER" \
       "https://crawler.algolia.com/api/1/crawlers/$ALGOLIA_CRAWLER_ID/reindex"
else
  echo "Skipping Algolia Crawler trigger (not a production build)."
fi