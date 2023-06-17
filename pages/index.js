import { getSession } from 'next-auth/react';
import Head from 'next/head'
import Hero from '../components/Hero'

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    },
  };
}


export default function Home({session}) {
  return (
    <div>
      <Head>
        <title>Dank Assistant Bot</title>
        <meta name = "description" content = "Made by the Dank Assistant Development Team" />
          <link rel = "icon" href = "/favicon.ico" />
      </Head>

      <Hero session={session} />
    </div>
  )
}
