import Image from 'next/image';
import styles from './styles.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/minha-foto.png'
          alt='An image showing Luiz'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I{"'"}m Luiz Gustavo</h1>
      <p>
        I blog about nweb development - espcecially frontend frameworks like
        React or Vue.
      </p>
    </section>
  );
};
