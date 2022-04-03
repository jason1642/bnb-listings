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
  background-color: #796049b1
;
  z-index: 6000;
; 
  justify-content: space-between;
  align-items: center;
`; 
const Logo = styled.img`
  height: 100%;
`;
const LogoContainer = styled(Link)`
  height: 100%;
`;




const Index = (props) => {


  const currentUser = useSelector(state => state.currentUser)
  
  return (<Main id="outer-container">
    <LogoContainer to='/' >

    <Logo src={siteLogo}/>
    </LogoContainer>
    {currentUser.authenticated ? 'Welcome,' +  currentUser.username : 'please log in' }
    <Nav currentUser={currentUser}/>
  </Main>)
};

export default Index;
