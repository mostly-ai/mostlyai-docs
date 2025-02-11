import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY;

function AlgoliaSearch() {
  return (
    <DocSearch
      appId="UPODPFM590"
      indexName="mostly"
      apiKey = {ALGOLIA_API_KEY}
      hitsPerPage = {10}
      maxResultsPerGroup = {7}
      resultsFooterComponent={({ state }) => {
        return <h1>{state.context.nbHits} hits found</h1>;
      }}
      insights
    />
  );
}

export default AlgoliaSearch;