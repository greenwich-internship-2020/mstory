import {api} from '../../Config/api';
import {projects} from '../../Config/api/subDomain';

import * as ActionTypes from './constant';

export const getStoriesList = (
  projectID: string,
  keyword: string,
  status: string,
  type: string,
  page: number,
) => {
  return async (dispatch: any) => {
    dispatch({type: ActionTypes.REQUEST});
    const payload = await api.get(
      `${projects}/${projectID}/stories?keyword=${keyword}&status=${status}&type=${type}&page=${page}`,
    );
    try {
      dispatch({
        type: ActionTypes.GET_STORIES,
        payload: payload.data,
      });
    } catch (err) {
      return err;
    }
  };
};
