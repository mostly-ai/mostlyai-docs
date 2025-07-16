import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { initTagManager } from "../utils/gtm";
import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    initTagManager();
  }, []);

  return (
      <Component {...pageProps} />
  );
}

export default App;
