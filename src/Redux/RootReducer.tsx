import {combineReducers} from 'redux';

import projectReducer from './Dashboard/Project/reducer';

import userReducer from './Dashboard/User/reducer';

import storiesReducer from './Dashboard/Stories/reducer';

import memberReducer from './Dashboard/Member/reducer';

import landingReducer from './Landing/reducer';

const rootReducer = combineReducers({
  userReducer,
  projectReducer,
  storiesReducer,
  memberReducer,
  landingReducer,
});

export default rootReducer;
