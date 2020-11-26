import {api} from '../../Config/api';

import {users} from '../../Config/api/subDomain';

import * as ActionTypes from './constant';

export const getUserList = (page: number, keyword: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.get(`${users}?keyword=${keyword}&page=${page}`);
      dispatch({
        type: ActionTypes.GET_USER,
        total: payload.data.total_count,
        searchList: payload.data.users,
        payload: keyword === '' ? payload.data.users : [],
        keyword,
      });
      return payload;
    } catch (error) {
      dispatch({
        type: ActionTypes.ERROR,
        message: error.response.data.message,
        error: true,
      });
      setTimeout(() => {
        dispatch({
          type: ActionTypes.ERROR,
          message: error.response.data.message,
          error: false,
        });
      }, 2000);
    }
  };
};

export const createUser = (user: object) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.post(users, user);
      dispatch({
        type: ActionTypes.POST_USER,
        payload: payload.data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.ERROR,
        message: error.response.data.message,
        error: true,
      });
      setTimeout(() => {
        dispatch({
          type: ActionTypes.ERROR,
          message: error.response.data.message,
          error: false,
        });
      }, 2000);
    }
  };
};

export const editUser = (user: object, username: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.put(`${users}/${username}`, user);
      dispatch({
        type: ActionTypes.PUT_USER,
        payload: payload.data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.ERROR,
        message: error.response.data.message,
        error: true,
      });
      setTimeout(() => {
        dispatch({
          type: ActionTypes.ERROR,
          message: error.response.data.message,
          error: false,
        });
      }, 2000);
    }
  };
};

export const deleteUser = (username: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      await api.delete(`${users}/${username}`);
      dispatch({
        type: ActionTypes.DELETE_USER,
        username,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.ERROR,
        message: error.response.data.message,
        error: true,
      });
      setTimeout(() => {
        dispatch({
          type: ActionTypes.ERROR,
          message: error.response.data.message,
          error: false,
        });
      }, 2000);
    }
  };
};
