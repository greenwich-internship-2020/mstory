import {stat} from 'fs/promises';
import * as ActionTypes from './constant';

const initialState = {
  loading: false,
  payload: [],
  total: 0,
  filterList: [],
};

const storiesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'RESET_MODULE':
      state = initialState;
      return {...state};

    case ActionTypes.REQUEST:
      return {...state, loading: true};

    case ActionTypes.GET_STORIES:
      if (
        (action.keyword !== '' && state.payload.length < 7) ||
        action.page === 1
      ) {
        return {
          payload: [],
          total: action.total,
          filterList: action.filterList,
        };
      }
      return {
        ...state,
        loading: false,
        total: action.total,
        payload: [...state.payload, ...action.payload],
      };

    default:
      return {...state};
  }
};

export default storiesReducer;
