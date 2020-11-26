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
      state.total = action.total;
      state.filterList = action.filterList;
      if (action.keyword !== '' && state.payload.length < 7) {
        return {
          payload: [],
          total: action.total,
          filterList: action.filterList,
        };
      }
      return {
        ...state,
        loading: false,
        payload: [...state.payload, ...action.payload],
      };

    default:
      return {...state};
  }
};

export default storiesReducer;
