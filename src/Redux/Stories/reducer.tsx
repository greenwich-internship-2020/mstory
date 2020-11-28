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
    case ActionTypes.POST_STORIES:
      return {
        ...state,
        loading: false,
        payload: [action.payload, ...state.payload],
      };
    case ActionTypes.PUT_STORIES:
      const newPayload = state.payload.map((story: any, index: number) => {
        if (story.story_id === action.payload.story_id) {
          return {
            ...story,
            title: action.payload.title,
            type: action.payload.type,
            points: action.payload.points,
            description: action.payload.description,
          };
        }
        return story;
      });
      return {
        ...state,
        payload: newPayload,
        loading: false,
      };
    case ActionTypes.PUT_STATUS:
      const newStatus = state.payload.map((story: any, index: number) => {
        if (story.story_id === action.id) {
          return {
            ...story,
            status: action.status,
          };
        }
        return story;
      });
      return {
        ...state,
        payload: newStatus,
        loading: false,
      };
    default:
      return {...state};
  }
};

export default storiesReducer;
