import React, {FC} from 'react';
import {RootStateOrAny, useSelector} from 'react-redux';
import LoginIndex from './formIndex';

interface Props {}

const Login: FC<Props> = (props) => {
  const username = useSelector(
    (state: RootStateOrAny) => state.landingReducer.username,
  );

  return <LoginIndex defaultUsername={username} />;
};

export default Login;
