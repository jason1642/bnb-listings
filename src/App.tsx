import './App.css';
import { useEffect } from 'react';
import SiteRoutes from './components/Routes'
import Header from './components/header/Header.jsx';
import {  useVerifyUserQuery } from './redux/features/userApi';

const App = () => {
  const {data, isLoading } = useVerifyUserQuery()
  
 
useEffect(() => {
  console.log(data)
}, [data]);

  return (
    <div className="App">
      <Header />
      {
        !isLoading && 
        <SiteRoutes 
          currentUser={data}
        />
    
      }
    </div>
  );
}

export default App;
