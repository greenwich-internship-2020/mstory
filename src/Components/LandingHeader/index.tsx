import React, {FC, useEffect, useRef, useState} from 'react';

import styles from './header.module.css';

import topping from '../../assets/toppng.png';

import {Link, NavLink} from 'react-router-dom';
import {Title} from '../Typography';
import clsx from 'clsx';

interface Props {}

const LandingHeader: FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const [top, setTop] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className={clsx(styles.wrapper, top && styles.top)}>
      <Link to="/mstory" className={styles.logo}>
        <img alt="Topping" src={topping} />
        <p className={styles.title}>MStory</p>
      </Link>
      <div className={styles.menu}>
        <div className={styles.link}>
          <NavLink
            activeClassName={styles.active}
            className={styles.login}
            to="/login"
          >
            <Title>Sign In</Title>
          </NavLink>
          <NavLink
            activeClassName={styles.active}
            className={styles.signup}
            to="/register"
          >
            <Title>Sign Up</Title>
          </NavLink>
        </div>
        <div
          ref={ref}
          onClick={() => setShow(!show)}
          className={styles.menuIco}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      </div>
      <div className={clsx(styles.menuLink, show && styles.show)}>
        <Link className={styles.wrapLink} to="/login">
          <Title className={styles.menuLogin}>Sign In</Title>
        </Link>
        <Link className={styles.wrapLink} to="/register">
          <Title className={styles.menuSignup}>Sign Up</Title>
        </Link>
      </div>
    </div>
  );
};

export default LandingHeader;
