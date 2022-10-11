import * as React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

import Layout from "../components/Layout/Layout";
import Text from "../components/System/Text";
import Dot from "../components/System/Dot";
import PostItem from "../components/Post/PostItem";
import Hero from "../components/Hero/Hero";
import Tag from "../components/System/Tag";
import Box from "../components/System/Box";

const metaTitle = "Miguel Cast";
const description = "About Miguel Cast. Tutorials focus on Javascript, Performance, GraphQl, React, CSS and HTML";

export default function Home({ configuration, posts, tags }) {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miguelcast.dev/" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="675" />
        <meta property="og:image" content="https://res.cloudinary.com/dtg6xzrhh/image/upload/f_auto,q_auto/v1602817385/miguelcast.dev/default_uf1jir.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://miguelcast.dev/" />
        <meta property="twitter:domain" content="miguelcast.dev" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:creator" content="@miguel__cast" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://res.cloudinary.com/dtg6xzrhh/image/upload/f_auto,q_auto/v1602817385/miguelcast.dev/default_uf1jir.png" />
      </Head>
      <Layout
        waves
        newsletter
        aside
        social={configuration?.social}
        Hero={(
          <Hero
            title={configuration?.welcome?.title}
            text={configuration?.welcome?.text}
            buttonText={configuration?.welcome?.button}
          />
        )}
      >
        <section>
          <Text as="h2" variant="title" fontSize={5} fontWeight={400} color="secondary">
            <Dot /> Publicaciones recientes
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
        <aside>
          <Text as="h2" variant="title" fontSize={5} fontWeight={400} color="secondary" pt={50}>
            Categorías
          </Text>
          <Box  display='flex' flexWrap='wrap'>
            {tags?.map(tag => <Tag key={tag.id} as="a" display="inline-block" margin={1}>
              {tag.name}
            </Tag>)}
          </Box>
        </aside>
      </Layout>
    </>
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
    tags (orderBy: name_ASC) {
      id
      name
    }
  }
`;

export async function getStaticProps() {
  const graphCMS = new GraphQLClient(process.env.API_GRAPH_CMS);
  const { configurations, posts, tags } = await graphCMS.request(HOME_QUERY);
  const configurationEntries = Object.fromEntries(configurations.map(config => Object.values(config)));
  return {
    props: {
      configuration: configurationEntries,
      posts,
      tags
    }
  };
}
