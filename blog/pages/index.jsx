import { Fragment } from 'react';
import Head from 'next/head';

import { FeaturedPosts } from '../components/FeaturedPosts';
import { Hero } from '../components/Hero';

import { getFeaturedPosts } from '../utils/posts';

export default function Home({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Luiz{"'"} Blog</title>
        <meta
          name='description'
          content='I postabout programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
