import Notfound from './Pages/Dashboard/Notfound';

import Project from './Pages/Dashboard/Project';

import Members from './Pages/Dashboard/Project_Members';

import Setting from './Pages/Dashboard/Project_Setting';

import Stories from './Pages/Dashboard/Project_Stories';

import User from './Pages/Dashboard/User';
import Home from './Pages/Landing/Home';

import Login from './Pages/Landing/Login';

import Register from './Pages/Landing/Register';

const landing = [
  {
    path: '/mstory',
    exact: false,
    component: Home,
  },
  {
    path: '/login',
    exact: false,
    component: Login,
  },
  {
    path: '/register',
    exact: false,
    component: Register,
  },
];

const dashboard = [
  {
    path: '/projects',
    exact: false,
    component: Project,
  },

  {
    path: '/users',
    exact: false,
    component: User,
  },

  {
    path: '/projects/:id/setting',
    exact: false,
    component: Setting,
  },

  {
    path: '/projects/:id/stories',
    exact: false,
    component: Stories,
  },

  {
    path: '/projects/:id/members',
    exact: false,
    component: Members,
  },

  {
    path: '',
    exact: false,
    component: Notfound,
  },
];

export {landing, dashboard};
