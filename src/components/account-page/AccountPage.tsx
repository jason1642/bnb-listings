import * as React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../redux/index';
import { Link,  Outlet } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getAllFavorites } from '../../services/api-helpers.ts'
import {BsHeart, BsPerson
} from 'react-icons/bs';
import Nav from './Nav.tsx'
interface IAccountPageProps {
}

const Container = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* align-self: center; */
  width: 85%;
  /* background-color: grey; */
  @media (max-width: 480px){
    padding-top: 80px;
    width: 100%;
  }
  `
const Title = styled.div`
  
`;

const AccountPage: React.FunctionComponent<IAccountPageProps> = (props) => {
 
  const dispatch = useDispatch(); 
  const [favoritesListData, setFavoritesListData] = useState([]);
  const currentUser = useSelector((state: RootState) => state.currentUser);
  // const { verifyUser } = bindActionCreators(userActions, dispatch);
  const Main = styled.div`
    min-height: 30vh;
    width: 100%;
    display: flex;
  `
  const Item = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    font-size: 16px;
    justify-content: flex-start;
    gap: 5px;
    align-items: center;
  `;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
    @media (max-width: 480px){
    width: 95%;
    flex-direction: column;
  }
  `;
  // url is account/:id
  useEffect(() => {

    // currentUser.username ? setIsAuthorized(true) : setIsAuthorized(false)
    console.log(currentUser._id)
    getAllFavorites(currentUser._id).then(res=>{setFavoritesListData(res.data)}, err=>{console.log(err)})


  }, []);
 useEffect(() => {
   console.log(favoritesListData)

 }, [favoritesListData]);
  return (
    <Container>    
      {currentUser ? <>
        {/* <Title>Your Account</Title> */}
        <Wrapper>
        <Nav />
        <Main>
          
          {/* mydetails and favorites components on path /account/details /account/favorites */}
          <Outlet context={ [favoritesListData, currentUser]}/>
          
          {/* Container to have account details or fav list based on url path /account/favorites /account/details */}
        </Main>

        </Wrapper>
        {/* {favoritesListData && <Favorites favoritesListData={favoritesListData} />} */}
      </>
        :
        <>User must log in </>
      }
    </Container>
  );
};

export default AccountPage;
