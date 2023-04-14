import '@/styles/globals.css';
import './app.css';
import type { AppProps } from 'next/app';
import ReactGA from 'react-ga';

import Layout from '@/components/Layout/Layout';
export default function App({ Component, pageProps }: AppProps) {
  const GA_TRACKING_ID = 'G-7GE8QF4G7Y';

  ReactGA.initialize(GA_TRACKING_ID);

  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
