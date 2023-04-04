import { setupListeners } from '@reduxjs/toolkit/query'
import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './features/userApi';
// =====================================
  // Wrap provider in index.js, like react-router
  // Middlewares allow you to create asynchronous calls within the action action
  // ^ action returns a function which you can do api requests in , then finally return dispatch({object}) like normal
// =====================================

// createStore(reducers, defaultState)
// export const store = createStore(reducers,
//   {},


  
// applyMiddleware(thunk));





export const store = configureStore({
  reducer: {
    // user: userReducer
    [userApi.reducerPath]: userApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userApi.middleware),
})
setupListeners(store.dispatch)