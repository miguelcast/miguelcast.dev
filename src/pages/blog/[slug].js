import React from 'react';
import { GraphQLClient } from 'graphql-request';

import Layout from "../../components/Layout/Layout";

export default function BlogPost({ post }) {
  return(
    <Layout>
      <h1>{post?.name}</h1>
      {post?.article?.html && (
        <article
          dangerouslySetInnerHTML={{ __html: post.article.html }}
        />
      )}
    </Layout>
  );
}

const POST_QUERY = `
  query Post ($slug: String) {
    post (where: { slug: $slug }) {
      slug
      name
      article {
        html
      }
    }
  }
`;

export async function getStaticProps({ params }) {
  const graphCMS = new GraphQLClient(process.env.API_GRAPH_CMS);
  const { post } = await graphCMS.request(POST_QUERY, {
    slug: params?.slug
  });
  return {
    props: {
      post
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
      params: { slug },
    })),
    fallback: true,
  }
}
