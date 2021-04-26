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
    a {
      ${css({
        color: 'secondary',
        fontWeight: 'bold'
      })};
    }
  }
  img {
    ${css({
      borderRadius: 1,
      maxWidth: '100%'
    })};
  }
`;

export default function BlogPost({ post, social }) {

  const content = hydrate(post?.content, {
    components: MDXComponents
  });

  const metaTitle = `${post?.name} | Miguel Cast`;
  const url = `https://miguelcast.dev/blog/${post?.slug}`;

  return(
    <Layout waves newsletter social={social} Hero={(
      <Text as="h1" variant="heading" textAlign="center" py={6} px={1}>{post?.name}</Text>
    )}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={post?.shortDescription} />

        <meta property="og:url" content={url} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={post?.shortDescription} />

        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={post?.shortDescription} />
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
      id
      slug
      name
      shortDescription
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
