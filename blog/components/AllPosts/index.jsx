import styles from './styles.module.css';

import { PostsGrid } from '../PostsGrid';

export const AllPosts = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};
