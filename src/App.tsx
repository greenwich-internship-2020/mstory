import React from 'react';

import './App.css';

import {BrowserRouter, Switch} from 'react-router-dom';

import DashboardTemplate from './Layout/Dashboard';

import LandingTemplate from './Layout/Landing';

import {dashboard, landing} from './routes';

const showDashboardTemplate = (routes: any) => {
  if (routes && routes.length > 0) {
    return routes.map((item: any, index: number) => {
      return (
        <DashboardTemplate key={index} {...item} Component={item.component} />
      );
    });
  }
};

const showLandingTemplate = (routes: any) => {
  if (routes && routes.length > 0) {
    return routes.map((item: any, index: number) => {
      return (
        <LandingTemplate key={index} {...item} Component={item.component} />
      );
    });
  }
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {showLandingTemplate(landing)}
        {showDashboardTemplate(dashboard)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
