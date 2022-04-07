import * as React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import HomePage from './home-page/Index.tsx'
import Login from './login-register/Login'
import Register from './login-register/Register';
import { useSelector} from 'react-redux';
import Directory from './rental-listings/directory/Index.jsx'
import PropertyInfo from './rental-listings/single-listing-page/PropertyInfo.tsx'
import AccountPage from './account-page/AccountPage.tsx';
import AreaNameListing from './rental-listings/area-name-listing/AreaNameListing.tsx';
const SiteRoutes = () => {
  
  const currentUser = useSelector(state => state.currentUser)

  
  return useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: currentUser.authenticated ? <Navigate to='/' replace /> : <Login /> },
    { path: '/register', element: currentUser.authenticated ? <Navigate to='/' replace /> : <Register /> },
    { path: '/directory', element: <Directory />},
    { path: '/listings/:_id', element: <PropertyInfo currentUser={currentUser}/>},
    { path: '/account/:_id', element: currentUser.authenticated ? <AccountPage /> : <Navigate to='/' replace />},
    { path: '/areas/:name', element: <AreaNameListing />},
  ])
}

export default SiteRoutes;

