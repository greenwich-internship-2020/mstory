import * as ActionTypes from './constant';

const initialState = {
  loading: false,
  total: 0,
  payload: [],
  error: false,
  message: '',
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.REQUEST:
      return {...state, loading: true};
    case 'RESET_MODULE':
      state = initialState;
      return {...state};
    case ActionTypes.GET_USER:
      state.total = action.total;
      if (action.keyword !== '') {
        return {
          payload: [...state.payload, ...action.payload],
          total: action.total,
        };
      }
      return {
        ...state,
        loading: false,
        payload: [...state.payload, ...action.payload],
      };
    case ActionTypes.POST_USER:
      return {
        ...state,
        loading: false,
        payload: [action.payload, ...state.payload],
      };

    case ActionTypes.PUT_USER:
      const newPayload = state.payload.map((user: any, index: number) => {
        if (user.username === action.payload.username) {
          return {
            ...user,
            fullname: action.payload.fullname,
            username: action.payload.username,
            email: action.payload.email,
          };
        }
        return user;
      });
      return {
        ...state,
        payload: newPayload,
        loading: false,
      };
    case ActionTypes.DELETE_USER:
      let position = -1;
      state.payload.map((user: any, index: number) => {
        if (user.username === action.username) {
          position = index;
        }
        return position;
      });
      state.payload.splice(position, 1);
      state.message = action.message;
      return {
        ...state,
        loading: false,
        noti: action.noti,
      };

    case ActionTypes.ERROR:
      state.message = action.message;
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return {...state, loading: false};
  }
};

export default userReducer;
