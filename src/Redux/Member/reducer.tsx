import * as ActionTypes from './constant';

const initialState = {
  loading: false,
  payload: [],
  total: 0,
  err: false,
  message: '',
};

const memberReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'RESET_MODULE':
      state = initialState;
      return {...state};

    case ActionTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.GET_MEMBER:
      state.total = action.total;
      return {
        ...state,
        loading: false,
        payload: [...state.payload, ...action.payload],
      };

    case ActionTypes.POST_MEMBER:
      return {
        ...state,
        loading: false,
        payload: [action.payload, ...state.payload],
      };

    case ActionTypes.ERROR:
      state.message = action.message;
      return {
        ...state,
        loading: false,
        err: action.error,
      };

    default:
      return {...state};
  }
};

export default memberReducer;
