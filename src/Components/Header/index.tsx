import React, {FC} from 'react';

import {Avatar} from '../Icons';

import {Title} from '../Typography';

import styles from './header.module.css';

interface HeaderProps {
  content?: string;
}

const Header: FC<HeaderProps> = ({content}) => {
  return (
    <div className={styles.header}>
      <Title>{content}</Title>
      <div className={styles.user}>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
