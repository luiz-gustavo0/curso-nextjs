import { PostContent } from '../../components/PostContent';
import { getPostData, getPostsFiles } from '../../utils/posts';

export default function PostDetail({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { slug } = context.params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const filenames = getPostsFiles();
  const slugs = filenames.map((filename) => filename.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
