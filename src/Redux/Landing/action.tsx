import {api} from '../../Config/api';

import {signup, login, logout} from '../../Config/api/subDomain';

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
      dispatch({
        type: ActionTypes.ERROR,
        error: error.response.data.message,
      });
    }
  };
};

export const signin = (user: any, history: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.post(login, user);
      dispatch({
        type: ActionTypes.LOGIN,
      });
      localStorage.setItem('user', JSON.stringify(payload.data));
      if (localStorage.getItem('user')) history.push('projects');
      return payload;
    } catch (error) {
      dispatch({
        type: ActionTypes.ERROR,
        error: error.response.data.message,
      });
    }
  };
};

export const signout = () => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.post(logout);

      dispatch({
        type: ActionTypes.LOGOUT,
      });

      localStorage.removeItem('user');
      window.location.pathname = '/mstory';
      return payload;
    } catch (error) {
      return error;
    }
  };
};
