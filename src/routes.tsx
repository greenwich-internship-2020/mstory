import Notfound from './Pages/Dashboard/Notfound';

import Project from './Pages/Dashboard/Project';

import Members from './Pages/Dashboard/Project_Members';

import Setting from './Pages/Dashboard/Project_Setting';

import Stories from './Pages/Dashboard/Project_Stories';

import Roles from './Pages/Dashboard/Roles';

import User from './Pages/Dashboard/User';

import Forgot from './Pages/Landing/Forgot';

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

  {
    path: '/forgot-password',
    exact: false,
    component: Forgot,
  },
];

const dashboard = [
  {
    path: '/projects',
    exact: true,
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
    path: '/roles',
    exact: false,
    component: Roles,
  },

  {
    path: '',
    exact: false,
    component: Notfound,
  },
];

export {landing, dashboard};
