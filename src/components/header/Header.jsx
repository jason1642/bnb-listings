import * as React from 'react';
import styled from 'styled-components';
import siteLogo from '../../resources/treeLogo.svg';
import Nav from './Nav.tsx'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Main = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 40px;
  max-height: 50px;
  /* background-color: #796049b1 */
  background-color: #807770;
  z-index: 6000;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    border-bottom: 1px solid black;
    max-height: 70px;
    height: 70px;
  }
`; 
const Logo = styled.img`
  height: 100%;
  @media (max-width: 480px) {
    height: 60px;
  }
`;
const LogoContainer = styled(Link)`
  height: 100%;
`;


const Button = styled(Link)`
  /* background-color: green; */
  height: 100%;
  text-decoration: none;
  color: #e1dfdf;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  &:hover{
    cursor: pointer;
  }
`;
const LoggedIn = styled.div`
  
  @media (max-width: 480px) {
    display: none;
  }
`;
const Index = (props) => {


  const currentUser = useSelector(state => state.currentUser)
  
  return (<Main id="outer-container">
    <LogoContainer to='/' >

    <Logo src={siteLogo}/>
    </LogoContainer>
    <LoggedIn>{currentUser.authenticated ? 'Welcome,' + currentUser.username : 'You are not logged in'}
    </LoggedIn>
          
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center'
    }}><Button to='/directory'>Search Rooms</Button>

    <Nav currentUser={currentUser} /></div>
  </Main>)
};

export default Index;
