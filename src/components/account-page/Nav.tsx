import * as React from 'react';
import styled from 'styled-components';
import {BsHeart, BsPerson
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
interface AnyObject { [key: string]: any };


const Container = styled.div`
  display: flex;
  width: 200px;
  height: 86vh;
  padding: 10px;
  /* border: 1px solid black; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  /* height: 100%; */
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3px;
  @media (max-width: 480px){
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
const Item = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  gap: 5px;
`;

const Nav = ({currentUser}:AnyObject) => {
  
// Side bar with - my details, favorites, preferences?
  return (
    <Container>
      
      <Item to='/account'><BsPerson />Account Details</Item>
          <Item to='/account/favorites'><BsHeart />Favorites</Item>
      {/* <Item></Item> */}
   </Container>
  );
}

export default Nav;