import React, {ComponentType, ReactElement} from 'react';

import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';

import Header from '../../Components/Header';

import Sidebar from '../../Components/Sidebar';

import styles from './dashboard.module.css';

type DashboardProps<P> = P extends RouteComponentProps<any>
  ? RouteProps & {
      component: ComponentType<P>;
      withProps?: Omit<P, keyof RouteComponentProps<any>>;
    }
  : never;

const DashboardLayout = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidenav}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <Header content="Harry James" />
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};

const DashboardTemplate = <P extends RouteComponentProps>({
  component: WrappedComponent,
  withProps,
  ...routeProps
}: DashboardProps<P>): ReactElement<P> => {
  return (
    <Route
      {...routeProps}
      render={(childProps) => {
        return (
          <DashboardLayout>
            <WrappedComponent {...childProps} {...withProps} />
            {window.location.pathname === '/' ||
            window.location.pathname === '/mstory' ||
            window.location.pathname === '/mstory/' ? (
              <Redirect to="/projects" />
            ) : null}
          </DashboardLayout>
        );
      }}
    />
  );
};

export default DashboardTemplate;
