import Link from 'next/link';

import { AddressIcon } from '../Icons/AddressIcon';
import { ArrowRightIcon } from '../Icons/ArrowRightIcon';
import { DateIcon } from '../Icons/DateIcon';
import { Button } from '../Button';

import styles from './styles.module.css';

export const EventItem = ({ title, date, image, location, id }) => {
  const readableDate = new Date(date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');

  return (
    <li className={styles.item}>
      <img src={image} alt='Title' />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
