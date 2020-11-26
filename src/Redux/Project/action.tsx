import {api} from '../../Config/api';
import {projects} from '../../Config/api/subDomain';
import * as ActionTypes from './constant';

export const getProjectList = (
  status: boolean,
  page: number,
  keyword: string,
  sort: any,
) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.get(
        `${projects}?keyword=${keyword}&is_active=${status}&view=${
          sort.view
        }&order=${sort.order}&page=${keyword === '' ? page : 1}`,
      );

      dispatch({
        type: ActionTypes.GET_PROJECT,
        total: payload.data.total_count,
        filterList: payload.data.projects,
        payload: keyword === '' ? payload.data.projects : [],
        status,
        keyword,
      });
    } catch (error) {
      return error;
    }
  };
};

export const getSpecificProject = (id: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.get(`${projects}/${id}`);
      dispatch({
        type: ActionTypes.GET_PROJECT_SPEC,
        payload: payload.data,
      });
    } catch (error) {
      return error;
    }
  };
};

export const createProject = (project: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.post(projects, project);

      dispatch({
        type: ActionTypes.POST_PROJECT,
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

export const deleteProject = (id: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      await api.delete(`${projects}/${id}`);

      dispatch({
        type: ActionTypes.DELETE_PROJECT,
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

export const updateProject = (id: string, project: object) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.put(`${projects}/${id}`, project);

      dispatch({
        type: ActionTypes.PUT_PROJECT,
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

export const updateStatus = (id: string, status: object) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      await api.put(`${projects}/${id}/set_status`, status);

      dispatch({
        type: ActionTypes.UPDATE_STATUS,
        status: Object.values(status)[0],
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
