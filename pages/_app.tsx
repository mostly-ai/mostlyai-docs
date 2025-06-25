import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initTagManager } from "../utils/gtm";
import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    initTagManager();
  }, []);

  return (
      <Component {...pageProps} />
  );
}

export default App;