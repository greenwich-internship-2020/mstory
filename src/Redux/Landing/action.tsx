import {api} from '../../Config/api';

import {signup} from '../../Config/api/subDomain';

import * as ActionTypes from './constant';

export const register = (user: any, history: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.post(signup, user);
      dispatch({
        type: ActionTypes.REGISTER,
        user,
      });
      history.push('login');
      return payload;
    } catch (error) {
      return error;
    }
  };
};
