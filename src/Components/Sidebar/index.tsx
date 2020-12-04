import React, {FC, useEffect, useState} from 'react';
import styles from './sidebar.module.css';

import topping from '../../assets/toppng.png';

import {Menu} from '../Typography';

import {NavLink} from 'react-router-dom';

import {Member, Project, Role, Story, User} from '../Icons';

import clsx from 'clsx';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = (props) => {
  const [subnav, setSubnav] = useState(false);

  let project: any;

  const storage = localStorage.getItem('project');

  if (storage) {
    project = JSON.parse(storage);
  }

  useEffect(() => {
    if (
      window.location.pathname ===
        `/projects/${project ? project.id : ''}/members` ||
      window.location.pathname ===
        `/projects/${project ? project.id : ''}/stories`
    ) {
      setSubnav(true);
    } else {
      setSubnav(false);
    }
  }, [subnav, project]);

  return (
    <div className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img className={styles.logoImg} src={topping} alt="topping" />
        <p className={styles.logoContent}>MStory</p>
      </div>

      {/* Nav sidebar */}
      <div className={styles.nav}>
        <div className={styles.navitem}>
          <NavLink
            activeClassName={styles.active}
            to="/projects"
            exact
            className={styles.navlink}
          >
            <div className={styles.navicon}>
              <Project />
            </div>
            <Menu>Projects</Menu>
          </NavLink>
          <div className={clsx(styles.subnav, subnav && styles.show)}>
            <NavLink
              activeClassName={styles.active}
              to={`/projects/${project ? project.id : ''}/stories`}
              className={styles.navlink}
            >
              <div className={styles.navicon}>
                <Story />
              </div>
              <Menu>User Stories</Menu>
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to={`/projects/${project ? project.id : ''}/members`}
              className={styles.navlink}
            >
              <div className={styles.navicon}>
                <Member />
              </div>
              <Menu>Members</Menu>
            </NavLink>
          </div>
        </div>
        <div className={styles.navitem}>
          <NavLink
            activeClassName={styles.active}
            to="/users"
            className={styles.navlink}
          >
            <div className={styles.navicon}>
              <User />
            </div>
            <Menu>Users</Menu>
          </NavLink>
        </div>
        <div className={styles.navitem}>
          <NavLink
            activeClassName={styles.active}
            to="/roles"
            className={styles.navlink}
          >
            <div className={styles.navicon}>
              <Role />
            </div>
            <Menu>Roles</Menu>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
