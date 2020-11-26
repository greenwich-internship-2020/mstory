import React from 'react';

import './App.css';

import {BrowserRouter, Switch} from 'react-router-dom';

import DashboardTemplate from './Layout/Dashboard';

import {dashboard} from './routes';

const showDashboardTemplate = (routes: any) => {
  if (routes && routes.length > 0) {
    return routes.map((item: any, index: number) => {
      return (
        <DashboardTemplate
          path={item.path}
          exact={item.exact}
          component={item.component}
          key={index}
        />
      );
    });
  }
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>{showDashboardTemplate(dashboard)}</Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
