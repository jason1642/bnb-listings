import { useRoutes, Navigate } from 'react-router-dom';
import HomePage from './home-page/Index'
import Login from './login-register/Login'
import Register from './login-register/Register';
import Directory from './rental-listings/directory/Index'
import PropertyInfo from './rental-listings/single-listing-page/PropertyInfo'
import AccountPage from './account-page/AccountPage';
import MyDetails from './account-page/MyDetails';
import Favorites from './account-page/Favorites';
import AreaNameListing from './rental-listings/area-name-listing/AreaNameListing';

const SiteRoutes = ({currentUser}: { currentUser: any}) => {
  

  // console.log(currentUser)
  return useRoutes([
    
    { path: '/login', element: currentUser ? <Navigate to='/' replace /> : <Login /> },
    { path: '/register', element: currentUser ? <Navigate to='/' replace /> : <Register /> },
    { path: '/directory', element: <Directory />},
    { path: '/listings/:_id', element: <PropertyInfo currentUser={currentUser}/>},
   {
      path: '/account',
      element: currentUser ? <AccountPage /> : <Navigate to='/' replace />,
      children: [
        { path: '', element: <MyDetails /> },
        { path: 'favorites', element: <Favorites /> }
      ]
    },
    { path: '/areas/:name', element: <AreaNameListing /> },
    { path: '/', element: <HomePage currentUser={currentUser} /> },
  ])
}

export default SiteRoutes;

