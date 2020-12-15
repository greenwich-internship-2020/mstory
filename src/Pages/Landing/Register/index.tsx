import React, {FC, useEffect} from 'react';

import RegisterIndex from './formIndex';

import * as action from '../../../Redux/Landing/action';

import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

import {RouteComponentProps} from 'react-router-dom';

interface Props extends RouteComponentProps<any> {}

const Register: FC<Props> = ({history}) => {
  const dispatch = useDispatch();

  const register = (user: any) => dispatch(action.register(user, history));

  const resetMessage = () => dispatch({type: 'RESET_MESSAGE'});

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

  return <RegisterIndex error={error} load={load} register={register} />;
};

export default Register;
