import * as ActionTypes from './constant';

const initialState = {
  load: false,
  username: '',
};

const landingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.REQUEST:
      return {...state, load: true};

    case ActionTypes.REGISTER:
      state.username = action.user.username;
      return {...state, load: false};

    default:
      return {...state};
  }
};

export default landingReducer;
