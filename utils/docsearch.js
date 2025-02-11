import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY;

function AlgoliaSearch() {
  return (
    <DocSearch
      appId="UPODPFM590"
      indexName="mostly"
      apiKey = {ALGOLIA_API_KEY}
      maxResultsPerGroup = {5}
      searchParameters={{
        hitsPerPage: 20,
      }}
      hitComponent={({ hit }) => (
        <a href={hit.url} style={{ display: "block", padding: "10px" }}>
          <strong>{hit.hierarchy.lvl1}</strong>
          <br />
            {hit.hierarchy.lvl2 || hit.content}
        </a>
      )}
      insights
    />
  );
}

export default AlgoliaSearch;