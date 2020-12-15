import React, {FC, useEffect} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

import LoginIndex from './formIndex';

import * as action from '../../../Redux/Landing/action';

import {RouteComponentProps} from 'react-router-dom';

interface Props extends RouteComponentProps<any> {}

const Login: FC<Props> = ({history}) => {
  const dispatch = useDispatch();

  const login = (user: any) => dispatch(action.signin(user, history));

  const resetMessage = () => dispatch({type: 'RESET_MESSAGE'});

  const username = useSelector(
    (state: RootStateOrAny) => state.landingReducer.username,
  );

  const load = useSelector(
    (state: RootStateOrAny) => state.landingReducer.load,
  );

  const error = useSelector(
    (state: RootStateOrAny) => state.landingReducer.error,
  );

  useEffect(() => {
    resetMessage();
    // eslint-disable-next-line
  }, []);

  return (
    <LoginIndex
      error={error}
      load={load}
      login={login}
      defaultUsername={username}
    />
  );
};

export default Login;
