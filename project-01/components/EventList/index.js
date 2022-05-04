import { EventItem } from '../EventItem';

import styles from './styles.module.css';

export const EventList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
