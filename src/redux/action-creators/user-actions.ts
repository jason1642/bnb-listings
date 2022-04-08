import axios from 'axios';
import * as Constants from '../constants'
const baseUrl = process.env.Node_ENV === 'production' ? 'https://listings-airbnb.herokuapp.com' : 'http://localhost:5040';
const api = axios.create({
  baseURL: baseUrl,
});

export const logInUser = (userInput: any) => {
  // Uses /api/user/auth post to verify credentials, then grants a jwt and user info
  return (dispatch: any) => 
    api.post('/api/user/auth', userInput).then(res => {
      console.log(res.data)

      localStorage.setItem('authToken', res.data.token);
      api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
      
      return dispatch({
        type: Constants.LOG_IN_USER,
        payload: res.data
      })
    })
      .catch(err => {
      console.log('CANNOT LOG IN')
      return dispatch({
        type:  Constants.LOG_IN_FAIL,
        payload: userInput
      })})}

export const verifyUser = () => {
//   const config = {
//     headers: { Authorization: `Bearer ${token}` }
// };
return (dispatch: any) => {
  const token = localStorage.getItem('authToken')
  

    return api.post('/api/user/auth/verify',
      {
      token: token
    }).then(res => {
      // console.log("success verify")
      return dispatch({
        type: Constants.VERIFY_USER,
        payload: res.data
      })

    }, () => dispatch({
      type: Constants.VERIFY_USER_FAIL,
      payload: undefined
    }))
  
    
  }
}
export const logOutUser = () => {

  return (dispatch: any) => dispatch({
    type: Constants.LOG_OUT_USER,
    payload: undefined
  })
}



export const logInFail = (user) => {

  return {
    type: Constants.LOG_IN_FAIL,
    payload: user
  }
}


interface RegisterData {
  username: string,
  email: string,
  password: string
}

export const registerUser = (userInput: RegisterData) => {
  

  return async (dispatch: any) => {
    await api.post('/api/user/create', userInput)
    .then(res => {
      dispatch({
        type: Constants.REGISTER_SUCCESS,
        payload: res
      })      
    }).catch(err => {
      dispatch({
        type: Constants.REGISTER_ERROR,
        payload: userInput
      })
      // console.log(err);
      // console.log('Sorry, your username or password is unavailable to use, try again');
      return err;
    });
  }
}