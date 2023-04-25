import Head from 'next/head';

import HomePage from '@/components/Home';
export default function Home() {
  return (
    <>
      <Head>
        <title>Xcel Pad </title>
        <meta
          name="description"
          content="Xcel Pad Web3 Launchpad Where Disruption Meets Creativity"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/xcel.svg" />
      </Head>
      <main className="lg:mt-20">
        <HomePage />
      </main>
    </>
  );
}
