import { AllPosts } from '../../components/AllPosts';
import { getAllPosts } from '../../utils/posts';

export default function Posts({ posts }) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
