import {combineReducers} from 'redux';

import projectReducer from './Project/reducer';

import userReducer from './User/reducer';

import storiesReducer from './Stories/reducer';

import memberReducer from './Member/reducer';

const rootReducer = combineReducers({
  userReducer,
  projectReducer,
  storiesReducer,
  memberReducer,
});

export default rootReducer;
