import * as ActionTypes from './constant';

const initialState = {
  loading: false,
  payload: [],
  total: 0,
  err: false,
  message: '',
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
      return {
        ...state,
        loading: false,
        payload: [...state.payload, ...action.payload],
      };
    case ActionTypes.POST_STORIES:
      state.total += 1;
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
    case ActionTypes.DELETE_STORIES:
      let position = -1;
      state.payload.map((story: any, index: number) => {
        if (story.story_id === action.storyID) {
          position = index;
        }
        return position;
      });
      state.payload.splice(position, 1);
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

export default storiesReducer;
