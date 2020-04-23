import Head from 'next/head';
import LandingLayout from '../components/layouts/LandingLayout';
import Landing from '../components/home';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Berkshire+Swash|Kodchasan:300,400,600,700&display=swap" rel="stylesheet"></link>
      </Head>

      <LandingLayout>
        <Landing />
      </LandingLayout>
    </div>
  )
}
