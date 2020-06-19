import Head from 'next/head'

import HeadLogo from "../components/Head";

export default function Home() {
  return (
    <div style={{ margin: "0 auto", maxWidth: 1100 }}>
      <Head>
        <title>Blog | Miguel Cast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{ height: 80, display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <h1 className="title">
          MiguelCast
        </h1>
      </header>

      <main>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p>I’m FullStack Developer from Colombia 🇨🇴</p>
            <p>
              I love to build beauty and
              performance applications
            </p>
            <button type="button">I'm here to help!</button>
          </div>
          <HeadLogo />
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
