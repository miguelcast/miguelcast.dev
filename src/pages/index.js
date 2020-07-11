import * as React from "react";
import Head from 'next/head'

import Button from "../components/Button";
import Logo from "../components/Logo";
import Text from "../components/Text";
import Waves from "../components/Waves";
import Social from "../components/Social";
import Dot from "../components/Dot";
import PostItem from "../components/PostItem";
import DiscoText from "../components/DiscoText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog | Miguel Cast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Waves />
      <div style={{ position: "relative" }}>
        <header style={{ margin: "0 auto", maxWidth: 1100, height: 80, display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",  }}>
          <Logo />
          <Social />
        </header>

        <section style={{ margin: "0 auto", maxWidth: 1100, marginTop: "2rem" }}>
          <div style={{ width: "83.33%", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <Text variant="heading" fontSize={2}>
                I’m FullStack Developer from Colombia 🇨🇴
              </Text>
              <Text variant="title" fontSize={6}>
                I love to dance with code and to build performance apps
              </Text>
              <Button type="button">I'm here to help!</Button>
            </div>
            <DiscoText>
              <span>CODE</span>
              <span>CODE</span>
              <span>CODE</span>
            </DiscoText>
          </div>
        </section>

      </div>

      <main style={{ margin: "0 auto", maxWidth: 1100 }}>
        <section style={{ width: "60%" }}>
          <Text as="h2" variant="title" fontSize={6} fontWeight={400} color="secondary">
            <Dot /> Sharing my neurons
          </Text>

          <PostItem
            title="Performance react hooks"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus diam cursus tellus nisl metus, quam dignissim bibendum sit. Viverra magna phasellus scelerisque tincidunt vulputate. Amend, jd lacadaa soca meyor mej."
          />

          <PostItem
            title="Performance react hooks"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus diam cursus tellus nisl metus, quam dignissim bibendum sit. Viverra magna phasellus scelerisque tincidunt vulputate. Amend, jd lacadaa soca meyor mej."
          />

          <PostItem
            title="Performance react hooks"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus diam cursus tellus nisl metus, quam dignissim bibendum sit. Viverra magna phasellus scelerisque tincidunt vulputate. Amend, jd lacadaa soca meyor mej."
          />
        </section>
      </main>

      <footer style={{ margin: "0 auto", maxWidth: 1100 }}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2020-present Miguel Cast. All Rights Reserved.
        </a>
      </footer>
    </>
  )
}
