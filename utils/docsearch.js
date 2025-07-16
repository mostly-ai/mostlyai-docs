import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY;

function AlgoliaSearch() {
  return (
    <DocSearch
      appId="UPODPFM590"
      indexName="mostly"
      apiKey = {ALGOLIA_API_KEY}
      maxResultsPerGroup = {3}
      insights
    />
  );
}

export default AlgoliaSearch;
