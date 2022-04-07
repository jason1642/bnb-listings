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
  const SideMenu = styled.div`
    display: flex;
    width: 200px;
    height: 70vh;
    padding: 10px;
    /* border: 1px solid black; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    /* height: 100%; */
    flex-direction: column;
    text-align: left;
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: center;
    margin-top: 20px;

    gap: 10px;
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
        <SideMenu>
          <Item to='/account'><BsPerson />Account Details</Item>
          <Item to='/account/favorites'><BsHeart />Favorites</Item>
</SideMenu>
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
