#!/bin/sh

# Check if we're in preview (skip Algolia trigger for preview and dev)
if [ "$VERCEL_ENV" = "preview" ]; then
  npm run build
  echo "Preview build detected. Triggering Algolia Crawler..."
  
  # Encode credentials for Basic Auth
  AUTH_HEADER=$(echo -n "$ALGOLIA_CRAWLER_USER_ID:$ALGOLIA_CRAWLER_API_KEY" | base64)
  
  # Trigger the Algolia crawler
  curl -X POST -H "Authorization: Basic $AUTH_HEADER" \
       "https://crawler.algolia.com/api/1/crawlers/$ALGOLIA_CRAWLER_ID/reindex"
else
  echo "Skipping Algolia Crawler trigger (not a preview build)."
fi