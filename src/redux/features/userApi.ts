import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface UserState {
    data: any,
    isAuthenticated: boolean, 
    isLoading: boolean,
  }
// interface UserLoginSchema {
//     username: string;
//     password: string;
// }

console.log(process.env.NODE_ENV)
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({  baseUrl:  'http://localhost:5050/api/user/auth'}), 
    tagTypes: ['User'],
    
    endpoints: (builder) => ({
      getAllUsers: builder.query<any, void>({
        // query: (name) => `pokemon/${name}`,
        query: ()=>''
      }),       

      loginUser: builder.query({
        query: (userForm: any) => {
            return({ 
          url: '/',
          method: 'POST',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          // Include the entire post object as the body of the request 
          body: userForm,
          credentials: "include"
 
        })}
      }),

      verifyUser: builder.query<any, void>({
        query: () => ({
          url: '/verify',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: {token: localStorage.getItem('authToken')},
        //   credentials: "include", 
          provideTags: ['User']
          // Include the entire post object as the body of the request
        //   body: userForm
        })
      }),
      




    }),
  })

  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints


  export const { useLoginUserQuery, useVerifyUserQuery, useGetAllUsersQuery, } = userApi

