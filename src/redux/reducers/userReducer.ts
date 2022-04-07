import { LOG_IN_USER, LOG_OUT_USER, VERIFY_USER, VERIFY_USER_FAIL, LOG_IN_FAIL, REGISTER_USER, REGISTER_ERROR, REGISTER_SUCCESS } from "../constants";
import _ from 'lodash';
const initialState = {
  username: undefined,
  _id: undefined,
  
  authenticated: false
}

// interface userType {name: string, password: string, type: string, payload: undefined | }
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case LOG_IN_USER:
      // console.log('The current user is ', action.payload)
      
      return _.assign(action.payload,
        { authenticated: true })
    
    case VERIFY_USER:
        // console.log(action.payload)
      return _.assign(action.payload, {authenticated: true})
    
    case VERIFY_USER_FAIL:
      
      return {
        ...state,
        status: 'error'
      }
    
    case LOG_IN_FAIL:
      return {
        ...state, 
        status: "error"
      };
    
    case LOG_OUT_USER:
      return action.payload;
    
    case REGISTER_USER:
      return action.payload;
    
    case REGISTER_SUCCESS: 
      return {
        ...state,
        status: 'success'
      }
    case REGISTER_ERROR:
      return {
        ...state,
        status: 'error'
      }

    default:
      return state;
  }
}

export default reducer; 