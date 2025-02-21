import { useEffect, useState } from 'react';
import { Callout } from 'nextra/components';

const ModelsList = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMostlyAiDocs, setIsMostlyAiDocs] = useState(false);

  useEffect(() => {
    // Check if the current URL contains 'https://mostly.ai/docs' or `vercel.app/docs` for preview deployments
    const currentUrl = window.location.href;
    if (
      currentUrl.includes('https://mostly.ai/docs') || 
      currentUrl.includes('vercel.app/docs') ||
      currentUrl.includes('localhost:3000') // For local testing: (1) keep to test dynamic LLMs retrieval, (2) remove to test the static callout for Enterprise deployments
    ) {
      setIsMostlyAiDocs(true);

      const fetchModels = async () => {
        try {
          const response = await fetch('/docs/api/proxy', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          setModels(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      // Fetch models only if the URL matches
      fetchModels();
    } else {
      setIsMostlyAiDocs(false);
      setLoading(false); // Avoid indefinite loading if URL does not match
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Conditional rendering based on the URL check
  if (isMostlyAiDocs) {
    return (
      <ul className="_mt-6 _list-disc first:_mt-0 ltr:_ml-6 rtl:_mr-6">
        {models.map((model) => {
          if (model === 'MOSTLY_AI/LSTMFromScratch-3m') {
            return null;
          } else {
            return (
              <li key={model} className="_my-2">
                <a
                  className="_text-primary-600 _underline _decoration-from-font [text-underline-position:from-font]"
                  href={`https://huggingface.co/${model}`}
                >
                  {model}
                </a>
              </li>
            );
          }
        })}
      </ul>
    );
  } else {
    return (
      <Callout type="info">
        This an Enterprise deployment of MOSTLY AI Documentation.
        <br /><br />
        For the list of LLMs that MOSTLY AI provides, go to the Free version at 
        <a 
          className="_text-primary-600 _underline _decoration-from-font [text-underline-position:from-font]"
          href="https://app.mostly.ai"
        > https://app.mostly.ai </a> 
        or check the 
        <a
          className="_text-primary-600 _underline _decoration-from-font [text-underline-position:from-font]"
          href="https://mostly.ai/docs/generators/configure/set-encoding-types#huggingface-llms"
        > public documentation
        </a>.
      </Callout>
    );
  }
};

export default ModelsList;
