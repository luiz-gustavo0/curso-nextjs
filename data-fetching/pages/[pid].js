import path from 'node:path';
import * as fs from 'node:fs/promises';

export default function ProductsDetail({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const productId = params.pid;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } },
    ],
    fallback: false,
  };
}
