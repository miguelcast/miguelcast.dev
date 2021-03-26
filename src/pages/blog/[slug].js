import React from 'react';
import Head from "next/head";
import styled from "styled-components";
import css from "@styled-system/css";
import { GraphQLClient } from 'graphql-request';
import hydrate from 'next-mdx-remote/hydrate';

import Layout from "../../components/Layout/Layout";
import Text from "../../components/System/Text";
import { getFileBySlug } from "../../utils/getFileBySlug";
import * as MDXComponents from "../../components/MardownRenders/MDXComponents";

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
  p {
    ${css({
      fontSize: [18, 18, 19]
    })};
  }
`;

export default function BlogPost({ post, social }) {

  const content = hydrate(post?.content, {
    components: MDXComponents
  });

  return(
    <Layout waves social={social} Hero={(
      <Text as="h1" variant="heading" textAlign="center" py={6} px={1}>{post?.name}</Text>
    )}>
      <Head>
        <title>{post?.name} | Miguel Cast</title>
      </Head>
      {content && (
        <Article>
          {content}
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

  const content = await getFileBySlug(params?.slug);

  return {
    props: {
      post: {
        ...post,
        content: content.mdxSource
      },
      social: configuration?.value || null
    }
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
