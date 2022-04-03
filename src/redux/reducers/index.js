// Combine all reducers 

import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import userReducer from './userReducer.ts';

// Function that takes an objects of all reducers to combine 
const reducers = combineReducers({
  account: accountReducer,
  currentUser: userReducer
});



// Always export default reducers functions
export default reducers;