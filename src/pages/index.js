import * as React from "react";
import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';

import Layout from "../components/Layout/Layout";
import Button from "../components/System/Button";
import Text from "../components/System/Text";
import Dot from "../components/System/Dot";
import PostItem from "../components/Post/PostItem";
import DiscoText from "../components/Hero/DiscoText";
import Hero from "../components/Hero/Hero";

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
    <Layout
      waves
      social={configuration?.social}
      Hero={(
        <Hero
          title={configuration?.welcome?.title}
          text={configuration?.welcome?.text}
          buttonText={configuration?.welcome?.button}
        />
      )}
    >
      <Head>
        <title>Blog | Miguel Cast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

    </Layout>
  )
}
