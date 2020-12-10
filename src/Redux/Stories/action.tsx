import {api} from '../../Config/api';
import {stories, storiesProject} from '../../Config/api/subDomain';

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
        `${storiesProject(
          projectID,
        )}?keyword=${keyword}&status=${status}&type=${type}&page=${page}`,
      );
      dispatch({
        type: ActionTypes.GET_STORIES,
        payload: payload.data.project_stories,
        total: payload.data.total_count,
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

export const createStory = (id: string, story: object) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.post(storiesProject(id), story);
      dispatch({
        type: ActionTypes.POST_STORIES,
        payload: payload.data,
      });
      return payload;
    } catch (error) {
      return error;
      // dispatch({
      //   type: ActionTypes.ERROR,
      //   message: error.response.data.message,
      //   error: true,
      // });
      // setTimeout(() => {
      //   dispatch({
      //     type: ActionTypes.ERROR,
      //     message: error.response.data.message,
      //     error: false,
      //   });
      // }, 2000);
    }
  };
};

export const editStory = (id: string, story: object) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.put(stories(id), story);
      dispatch({
        type: ActionTypes.PUT_STORIES,
        payload: payload.data,
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

export const editStatus = (id: string, story: object) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.put(`${stories(id)}/set_status`, story);
      dispatch({
        type: ActionTypes.PUT_STATUS,
        status: Object.values(story)[0],
        id,
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

export const deleteStory = (projectID: string, storyID: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.delete(
        `${storiesProject(projectID)}/${storyID}`,
      );
      dispatch({
        type: ActionTypes.DELETE_STORIES,
        storyID,
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
