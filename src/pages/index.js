import * as React from "react";
import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';

import Button from "../components/Button";
import Logo from "../components/Logo";
import Text from "../components/Text";
import Waves from "../components/Waves";
import Social from "../components/Social";
import Dot from "../components/Dot";
import PostItem from "../components/PostItem";
import DiscoText from "../components/DiscoText";

const HOME_QUERY = `
  query Home {
    configurations {
      key
      value
    }
    posts (orderBy: publishedAt_DESC) {
      id
      slug
      name
      shortDescription
      tags {
        id
        name
      }
    }
  }
`;

export async function getStaticProps() {
  const graphCMS = new GraphQLClient(process.env.API_GRAPH_CMS);
  const { configurations, posts } = await graphCMS.request(HOME_QUERY);
  return {
    props: {
      configuration: Object.fromEntries(configurations.map(config => Object.values(config))),
      posts
    }
  };
}

export default function Home({ configuration, posts }) {
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
          <Social social={configuration?.social} />
        </header>

        <section style={{ margin: "0 auto", maxWidth: 1100, marginTop: "2rem" }}>
          <div style={{ width: "83.33%", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <Text variant="heading" fontSize={2}>
                {configuration.welcome.text}
              </Text>
              <Text variant="title" fontSize={6} lineHeight={1.4}>
                {configuration.welcome.title}
              </Text>
              <Button type="button">{configuration.welcome.button}</Button>
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

          {posts?.map(post => (
            <PostItem
              key={post.id}
              title={post.name}
              description={post.shortDescription}
              tags={post?.tags}
            />
          ))}

        </section>
      </main>

      <footer style={{ margin: "2rem auto 2rem", maxWidth: 1100, textAlign: "center" }}>
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
