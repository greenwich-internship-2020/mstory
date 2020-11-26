import {combineReducers} from 'redux';

import projectReducer from './Project/reducer';

import userReducer from './User/reducer';

import storiesReducer from './Stories/reducer';

const rootReducer = combineReducers({
  userReducer,
  projectReducer,
  storiesReducer,
});

export default rootReducer;
