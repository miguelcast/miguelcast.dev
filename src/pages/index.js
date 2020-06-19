import Head from 'next/head'

import HeadLogo from "../components/Head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Blog | Miguel Cast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          MiguelCast
        </h1>
        <section>
          <HeadLogo />
          <p>I’m FullStack Developer from Colombia 🇨🇴</p>
          <p>
            I love to build beauty and
            performance applications
          </p>
          <button type="button">I'm here to help!</button>
        </section>
        <section>
          <h2>Sharing my neurons</h2>
        </section>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Miguel Cast
        </a>
      </footer>
    </div>
  )
}
