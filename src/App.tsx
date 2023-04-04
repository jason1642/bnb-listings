import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from './redux/index'
import { useEffect, useState } from 'react';
import SiteRoutes from './components/Routes'
import Header from './components/header/Header.jsx';
import { RootState } from './redux/reducers';

function App() {

  // This powerful hook lets us get that state from the redux store
  // Can be called anything and can return any number of states if you
  // only need to use certain ones.
  // Appears to be unable to be deconstructed
  const currentUser = useSelector((state: RootState) => state.currentUser)
  const dispatch = useDispatch()
  const [didAutheticate, setDidAuthenticate] = useState(true)
  const [isResolved, setIsResolved] = useState(false)
  // Returns the state from the store.js folder in redux
  const { verifyUser }: {verifyUser: any} = bindActionCreators(userActions, dispatch);
  
  const handleVerify = async () => {
    verifyUser().then((e: any) => {
      currentUser.authenticated ?
    setDidAuthenticate(true) :
    setDidAuthenticate(false);
    }, (err: any)=>console.log(err))
    
    setIsResolved(true)
  }
  
  useEffect(() => {

  
    handleVerify()
    
    // console.log(currentUser)
  }, [])
  
  // returns an object with action methods from imported action folder
  // should be deconstructed
  // Can be used to manipulate the state, given a function with the parameter of the value being used to change the state 
useEffect(() => {
  // console.log(currentUser)

    verifyUser()
}, []);

  return (
    <div className="App">
      <Header />
      {
        isResolved && 
        <SiteRoutes 
        // didAuthenticate={didAutheticate} 
        />
    
      }
    </div>
  );
}

export default App;
