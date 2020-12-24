import React, {ComponentType, ReactElement} from 'react';

import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';

import 'react-perfect-scrollbar/dist/css/styles.css';

import PerfectScrollbar from 'react-perfect-scrollbar';

import LandingFooter from '../../Pages/Landing/LandingFooter';

import LandingHeader from '../../Pages/Landing/LandingHeader';

import styles from './landing.module.css';

type LandingProps<P> = P extends RouteComponentProps<any>
  ? RouteProps & {
      component: ComponentType<P>;
      withProps?: Omit<P, keyof RouteComponentProps<any>>;
    }
  : never;

const LandingLayout = (props: any) => {
  return (
    <div className={styles.container}>
      <LandingHeader />
      <PerfectScrollbar>
        <div className={styles.content}>{props.children}</div>
      </PerfectScrollbar>
      <LandingFooter />
    </div>
  );
};

const LandingTemplate = <P extends RouteComponentProps>({
  component: WrappedComponent,
  withProps,
  ...routeProps
}: LandingProps<P>): ReactElement<P> => {
  localStorage.removeItem('project');
  return (
    <Route
      {...routeProps}
      render={(childProps) => {
        // if (!localStorage.getItem('user')) {
        return (
          <LandingLayout>
            <WrappedComponent {...childProps} {...withProps} />
          </LandingLayout>
        );
        // } else {
        //   return <Redirect to="/projects" />;
        // }
      }}
    />
  );
};

export default LandingTemplate;
