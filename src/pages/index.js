import * as React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

import Layout from "../components/Layout/Layout";
import Text from "../components/System/Text";
import Dot from "../components/System/Dot";
import PostItem from "../components/Post/PostItem";
import Hero from "../components/Hero/Hero";

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
        <title>Miguel Cast</title>
        <meta name="description" content="About Miguel Cast. Tutorials focus on React, Performance, GraphQl, CSS and HTML" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Miguel Cast" />
        <meta property="og:description" content="About Miguel Cast. Tutorials focus on React, Performance, GraphQl, CSS and HTML" />

        <meta name="twitter:creator" content="@miguel__cast" />
        <meta name="twitter:title" content="Miguel Cast" />
        <meta name="twitter:description" content="About Miguel Cast. Tutorials focus on React, Performance, GraphQl, CSS and HTML" />
      </Head>
      <section>
        <Text as="h2" variant="title" fontSize={6} fontWeight={400} color="secondary">
          <Dot /> Sharing my perspectives
        </Text>
        {posts?.map(post => (
          <Link key={post.id} href="/blog/[slug]" as={`/blog/${post.slug}`}>
            <a>
              <PostItem
                title={post.name}
                description={post.shortDescription}
                tags={post?.tags}
              />
            </a>
          </Link>
        ))}
      </section>
    </Layout>
  )
}

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
