import React, {ComponentType, ReactElement} from 'react';

import {useDispatch} from 'react-redux';

import {signout} from '../../Redux/Landing/action';

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
  let user: any;

  const storage = localStorage.getItem('user');

  if (storage) {
    user = JSON.parse(storage);
  }

  const dispatch = useDispatch();

  const logout = () => dispatch(signout());

  return (
    <div className={styles.container}>
      <div className={styles.sidenav}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <Header logout={logout} content={user.fullname} />
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
        if (localStorage.getItem('user')) {
          return (
            <DashboardLayout>
              <WrappedComponent {...childProps} {...withProps} />
            </DashboardLayout>
          );
        } else {
          return <Redirect to="/mstory" />;
        }
      }}
    />
  );
};

export default DashboardTemplate;
