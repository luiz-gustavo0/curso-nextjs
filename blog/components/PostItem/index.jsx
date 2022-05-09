import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

export const PostItem = ({ post }) => {
  return (
    <li className={styles.post}>
      <Link href={`/posts/${post.slug}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={`/images/${post.image}`}
              alt={post.title}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div className={styles.content}>
            <h3>{post.title}</h3>
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <p>{post.excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};
