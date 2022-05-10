import Head from 'next/head';
import { ContatctForm } from '../../components/ContatctForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <ContatctForm />
    </>
  );
}
