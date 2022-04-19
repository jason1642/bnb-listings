import axios from 'axios';
import _ from 'lodash';
const baseUrl = process.env.Node_ENV === 'production' ? 'https://reactbnb-listings.herokuapp.com' : 'http://localhost:5050';


// Create a new instance of axios with a custom config
// Useful to reduce redundency of typing out entire url for each request, just write path
// Use axios like normal, but just call api.get instaed of axios.get
const api = axios.create({
  baseURL: baseUrl,
});

interface RegisterData {
  username: string,
  email: string,
  password: string
}
export const registerUser = async (registerData: RegisterData, navigate: Function) => {
  
  await api.post('/api/user/create', registerData)
    .then(res => {
      // console.log('successfully created new user');
      navigate('/');
      window.location.reload();
    }).catch(err => {
      // console.log('Sorry, your username or password is unavailable to use, try again');
      return err;
    });
  
};

interface LoginData {
  username: string, 
  password: string
}
// Uses /api/user/auth post to verify credentials, then grants a jwt and user info

// export const apiLogIn = async (loginData: LoginData) => 
//   await api.post('/api/user/auth', loginData).then(res => {

//     localStorage.setItem('authToken', res.data.token);
//     api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
//     return res.data.user;
//   }).catch(err => console.log('CANNOT LOG IN'))

type AddRemoveFavorites = (user_id: string, listing_id: string) => Promise<string>
export const addFavorite: AddRemoveFavorites = async (user_id, listing_id) => 
  await api.post('/api/user/add-favorite', {
    listing_id: listing_id,
    _id: user_id
  }).then(res => {
    console.log(res)
    return res.data === 'added' ? 'added' : 'removed'
  }, err => {
    console.log(err)
    return 'removed'
  })




export const getAllFavorites = async (user_id: string) =>
  await api.post(`/api/user/get-all-favorites-data`,
    { _id: user_id })
    .then(res => res, err => err)




export const handleChangePassword = async (input) => {
  const token = localStorage.getItem("authToken");
  return await api.put('/api/user/change-password', _.assign(input, { token: token }))
    .then((res) => {
      console.log(res)
      return true
    }, err => {
      console.log(err)
      return false
    })
}


export const getAreaByName = async (name:string) => 
  await api.get(`/api/airbnb/listings/areas/${name}`).then(res=>res.data).catch(err=>err)







export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    return await api.get('/user/auth/verify')
      .then(res => {
        return res.data
      }, err => null)
  }
  return false;
}

export const removeToken = () => {
  // Accepts type string, number, boolean
  api.defaults.headers.common.authorization = false;
};