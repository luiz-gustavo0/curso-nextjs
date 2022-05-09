import { PostItem } from '../PostItem';

import styles from './styles.module.css';

export const PostsGrid = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
