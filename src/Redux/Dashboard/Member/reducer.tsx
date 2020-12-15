import * as ActionTypes from './constant';

const initialState = {
  loading: false,
  payload: [],
  filterList: [],
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
        filterList: action.payload,
      };

    case ActionTypes.POST_MEMBER:
      state.total += 1;
      return {
        ...state,
        loading: false,
        payload: [action.payload, ...state.payload],
      };
    case ActionTypes.PUT_STATUS:
      return {
        ...state,
        loading: false,
      };
    case ActionTypes.DELETE_MEMBER:
      let position = -1;
      state.payload.map((member: any, index: number) => {
        if (member.user_id === action.memberId) {
          position = index;
        }
        return position;
      });
      state.payload.splice(position, 1);
      state.total--;
      return {
        ...state,
        loading: false,
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
