import * as ActionTypes from './constant';

const initialState = {
  load: false,
  username: '',
  error: '',
};

const landingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.REQUEST:
      return {...state, load: true};

    case ActionTypes.REGISTER:
      state.username = action.user.username;

      state.error = initialState.error;

      return {...state, load: false};

    case ActionTypes.LOGIN:
      return {...state, load: false};

    case ActionTypes.ERROR:
      state.error = action.error;
      return {...state, load: false};

    case 'RESET_MESSAGE':
      state.error = '';
      return {...state};

    default:
      return {...state};
  }
};

export default landingReducer;
