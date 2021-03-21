import React from 'react';
import Head from "next/head";
import styled from "styled-components";
import css from "@styled-system/css";
import { GraphQLClient } from 'graphql-request';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';

import * as renderers from "../../components/MardownRenders";
import Layout from "../../components/Layout/Layout";
import Text from "../../components/System/Text";

const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script'
})

const Article = styled.article`
  font-size: 18px;
  ${css({
    maxWidth: "maxArticle",
    fontFamily: "body",
    color: 'text',
    lineHeight: '1.6',
    m: '0 auto'
  })};
  h2 {
    ${css({
      fontFamily: "heading",
      color: 'secondary',
    })};
  }
`;

export default function BlogPost({ post, social }) {
  return(
    <Layout waves social={social} Hero={(
      <Text as="h1" variant="heading" textAlign="center" py={6} px={1}>{post?.name}</Text>
    )}>
      <Head>
        <title>{post?.name} | Miguel Cast</title>
      </Head>
      {post?.content && (
        <Article>
          <ReactMarkdown
            escapeHtml={false}
            source={post.content}
            renderers={renderers}
            astPlugins={[parseHtml]}
          />
        </Article>
      )}
    </Layout>
  );
}

const POST_QUERY = `
  query Post ($slug: String) {
    configuration (where:{ key: "social" }) {
      value
    }
    post (where: { slug: $slug }) {
      slug
      name
      content
    }
  }
`;

export async function getStaticProps({ params }) {
  const graphCMS = new GraphQLClient(process.env.API_GRAPH_CMS);
  const { post, configuration } = await graphCMS.request(POST_QUERY, {
    slug: params?.slug
  });

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post,
      social: configuration?.value || null
    },
    revalidate: 24 * 60 * 60
  }
}

const POSTS_QUERY = `
  query Posts {
    posts (orderBy: publishedAt_DESC) {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const graphCMS = new GraphQLClient(process.env.API_GRAPH_CMS);
  const { posts } = await graphCMS.request(POSTS_QUERY);
  return {
    paths: posts.map(({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: false,
  }
}
