import * as ActionTypes from './constant';

const initialState = {
  loading: false,
  status: true,
  noti: false,
  error: false,
  total: 0,
  payloadObj: {
    name: '',
    description: '',
    is_public: false,
    is_active: false,
    project_id: '',
  },
  payload: [],
  filterList: [],
  message: '',
};

const projectReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'RESET_MODULE':
      state = initialState;
      return {...state};

    case ActionTypes.REQUEST:
      return {...state, loading: true};

    case ActionTypes.GET_PROJECT:
      state.filterList = action.filterList;
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

    case ActionTypes.GET_PROJECT_SPEC:
      state.payloadObj = action.payload;
      return {...state, loading: false};

    case ActionTypes.POST_PROJECT:
      return {
        ...state,
        loading: false,
        payload: [action.payload, ...state.payload],
      };

    case ActionTypes.UPDATE_STATUS:
      state.payloadObj.is_active = action.status;
      return {...state, loading: false};

    case ActionTypes.PUT_PROJECT:
      state.payloadObj = action.payload;
      return {...state, loading: false};

    case ActionTypes.DELETE_PROJECT:
      window.location.pathname = '/projects';
      return {...state, loading: false};

    case ActionTypes.ERROR:
      state.message = action.message;
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return {...state};
  }
};

export default projectReducer;
