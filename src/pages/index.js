import * as React from "react";
import Head from 'next/head'

import HeadLogo from "../components/Head";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Text from "../components/Text";

export default function Home() {
  return (
    <div style={{ margin: "0 auto", maxWidth: 1100 }}>
      <Head>
        <title>Blog | Miguel Cast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{ height: 80, display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Logo />
      </header>

      <main>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Text variant="subtitle" fontSize={2}>
              I’m FullStack Developer from Colombia 🇨🇴
            </Text>
            <Text variant="title" fontSize={6}>
              I love to build beauty and <br />
              performance applications
            </Text>
            <Button type="button">I'm here to help!</Button>
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
