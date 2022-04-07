import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators, userActions } from './redux/index'
import { useEffect } from 'react';
import SiteRoutes from './components/Routes'
import Header from './components/header/Header.jsx';

function App() {

  // This powerful hook lets us get that state from the redux store
  // Can be called anything and can return any number of states if you
  // only need to use certain ones.
  // Appears to be unable to be deconstructed
  const currentUser = useSelector((state) => state.currentUser)
  const dispatch = useDispatch()
  // Returns the state from the store.js folder in redux
  const { verifyUser } = bindActionCreators(userActions, dispatch);
  
  
  useEffect(() => {
    verifyUser()
    console.log(currentUser)
  },[])
  // returns an object with action methods from imported action folder
  // should be deconstructed
  // Can be used to manipulate the state, given a function with the parameter of the value being used to change the state 
useEffect(() => {
  console.log(currentUser)
}, [currentUser]);

  return (
    <div className="App">
      <Header />
      <SiteRoutes />
    
   
    </div>
  );
}

export default App;
