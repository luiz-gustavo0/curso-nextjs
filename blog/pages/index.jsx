import { Fragment } from 'react';

import { FeaturedPosts } from '../components/FeaturedPosts';
import { Hero } from '../components/Hero';

import { getFeaturedPosts } from '../utils/posts';

export default function Home({ posts }) {
  return (
    <Fragment>
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
