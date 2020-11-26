import React, {FC, ReactNode} from 'react';
import styles from './card.module.css';

interface CardProps {
  head?: string;
  content?: ReactNode;
  tag?: ReactNode;
  foot?: ReactNode;
}

const Card: FC<CardProps> = ({head, tag, foot, content}) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <p className={styles.title}>{head}</p>
        <div className={styles.tag}>{tag}</div>
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.foot}>{foot}</div>
    </div>
  );
};

export default Card;
