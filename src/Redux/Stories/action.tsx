import {api} from '../../Config/api';
import {stories} from '../../Config/api/subDomain';

import * as ActionTypes from './constant';

export const getStoriesList = (
  projectID: string,
  keyword: string,
  status: string,
  type: string,
  page: number,
) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.get(
        `${stories(
          projectID,
        )}?keyword=${keyword}&status=${status}&type=${type}&page=${
          keyword === '' ? page : 1
        }`,
      );
      dispatch({
        type: ActionTypes.GET_STORIES,
        payload: keyword === '' ? payload.data.project_stories : [],
        filterList: payload.data.project_stories,
        total: payload.data.total_count,
        keyword,
      });
      return payload;
    } catch (error) {
      return error;
    }
  };
};
