import React, {FC} from 'react';

import RegisterIndex from './formIndex';

import * as action from '../../../Redux/Landing/action';

import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

import {RouteComponentProps} from 'react-router-dom';

interface Props extends RouteComponentProps<any> {}

const Register: FC<Props> = ({history}) => {
  const dispatch = useDispatch();

  const register = (user: any) => dispatch(action.register(user, history));

  const load = useSelector(
    (state: RootStateOrAny) => state.landingReducer.load,
  );

  return <RegisterIndex load={load} register={register} />;
};

export default Register;
