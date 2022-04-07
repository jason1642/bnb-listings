import * as React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../redux/index';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';


interface IAccountPageProps {
}

const Container = styled.div`
  padding-top: 40px;
`;
const Title = styled.div`
  
`;
// Must be verified to see anything on this path : /account/:_id
// verify by api helpers 
// With redux i can 


const AccountPage: React.FunctionComponent<IAccountPageProps> = (props) => {
  // const { _id } = useParams();
  const dispatch = useDispatch(); 
  const [isAuthorized, setIsAuthorized] = useState<Boolean>();
  const currentUser = useSelector((state: RootState) => state.currentUser);
  // const { verifyUser } = bindActionCreators(userActions, dispatch);

  // url is account/:id
  useEffect(() => {
    // currentUser.username ? setIsAuthorized(true) : setIsAuthorized(false)




  }, []);
 
  return (
    <Container>
      


    <Title>Account Page</Title>

    



      {
        // isAuthorized ? <>THE USER CAN VIEW THIS PAGE </> : <>NOT AUTHORIZED</>
      }
    </Container>
  );
};

export default AccountPage;
