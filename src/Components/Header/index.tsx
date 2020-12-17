import clsx from 'clsx';

import React, {FC, useEffect, useRef, useState} from 'react';

import {Avatar} from '../Icons';

import {Title} from '../Typography';

import styles from './header.module.css';

interface HeaderProps {
  content?: string;
  logout?: any;
}

const Header: FC<HeaderProps> = ({logout, content}) => {
  const [show, setShow] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={() => setShow(true)} className={styles.header}>
        <div ref={ref} className={styles.info}>
          <Title>{content}</Title>
          <div className={styles.user}>
            <Avatar />
          </div>
        </div>
        <div className={clsx(styles.action, show && styles.show)}>
          <div className={styles.detail}>
            <Title>Information</Title>
          </div>
          <div onClick={() => logout()} className={styles.logout}>
            <Title>Log out</Title>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
