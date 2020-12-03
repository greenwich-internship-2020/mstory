import {api} from '../../Config/api';
import {membersProject} from '../../Config/api/subDomain';

import * as ActionTypes from './constant';

export const getMemberList = (
  id: any,
  keyword: string,
  role: string,
  page: number,
) => {
  return async (dispatch: any) => {
    dispatch({type: ActionTypes.REQUEST});
    try {
      const payload = await api.get(
        `${membersProject(id)}?keyword=${keyword}&role=${role}&page=${page}`,
      );

      dispatch({
        type: ActionTypes.GET_MEMBER,
        payload: payload.data.members,
        total: payload.data.total_count,
      });
      return payload;
    } catch (err) {
      dispatch({
        type: ActionTypes.ERROR,
        message: err.response.data.message,
        error: true,
      });
      setTimeout(() => {
        dispatch({
          type: ActionTypes.ERROR,
          message: err.response.data.message,
          error: false,
        });
      }, 2000);
    }
  };
};

export const inviteMember = (id: string, member: object) => {
  return async (dispatch: any) => {
    dispatch({type: ActionTypes.REQUEST});
    try {
      const payload = await api.put(membersProject(id), member);

      dispatch({
        type: ActionTypes.POST_MEMBER,
        payload: payload.data,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.ERROR,
        message: err.response.data.message,
        error: true,
      });
      setTimeout(() => {
        dispatch({
          type: ActionTypes.ERROR,
          message: err.response.data.message,
          error: false,
        });
      }, 2000);
    }
  };
};
