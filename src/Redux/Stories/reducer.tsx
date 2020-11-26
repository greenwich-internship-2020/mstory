import * as ActionTypes from './constant';

const initialState = {
  loading: false,
  payload: [],
};

const storiesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'RESET_MODULE':
      state = initialState;
      return {...state};

    case ActionTypes.REQUEST:
      return {...state, loading: true};

    case ActionTypes.GET_STORIES:
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
