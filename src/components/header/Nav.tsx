import * as React from 'react';
import {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu'
import {removeToken} from '../../services/api-helpers.ts'
import { bindActionCreators } from 'redux';
import { userActions } from '../../redux/index';
import { useDispatch } from 'react-redux';



const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
  marginRight: '20px'
  },
  bmBurgerBars: {
    background: '#373a47',
    height: '4px'
  },
  // bmBurgerBarsHover: {
  //   background: '#a90000'
  // },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    // background: '#bdc3c7'
  },
  // bmMenuWrap: {
  //   position: 'relative',
  //   height: '120px'
  //   // height: '100%'
  // },
  bmMenuWrap: {
    width: '200px',
    marginTop: '10px',
    marginRight: '0px',
    
  },
  bmMenu: {
    background: 'white',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    zIndex: 500,
    height: '120px'
  },
  // bmMorphShape: {
  //   fill: '#373a47'
  // },
  bmItemList: {
    color: '#b8b7ad',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  bmItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bmOverlay: {
    background: 'transparent',
    transition: 'none',
    height: '50px'
    
  }
}
interface INavProps {
  
  currentUser: {
    _id: string,
    username: string,
    password: string,
    authenticated: boolean
  }
}
const Container = styled(Menu)`
  /* height: 100%; */
  /* margin-right: 40px; */
  z-index: 500;
`;   
const Button = styled(Link)`
  /* padding: 10px;
  height: 30px; */
  height: 30px;
  padding: 5px 16px;
  text-decoration: none;
  color: black;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`   
const handleLogout = ( ) => {
  localStorage.clear();
  // setUser(null)
  removeToken();
  console.log('You are logged out')
  window.location.reload();
}



const Nav: React.FunctionComponent<INavProps> = ({ currentUser }: INavProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch()

  const {logUser} = bindActionCreators(userActions, dispatch);

  const handleClose = () => {
    setIsOpen(false)
    console.log(isOpen)
  }



  return (

    <Container
      isOpen={isOpen}
      onOpen={()=>setIsOpen(true)}
      right
      styles={styles}   
      outerContainerId={"outer-container"}
      pageWrapId={"page-wrap"}
    >

      {currentUser.authenticated ?
        <>
        <Button  to='/directory'>View Houses</Button>
          <Button  to='/account/favorites'>View Favorites</Button>
          <Button to={`/account`}>My Account</Button>
          <Button onClick={() => {
            handleLogout()
            handleClose()
          }
          } to='/'>Log Out</Button>
        </>
        :
        <>
          <Button  to='/login'>Log In</Button>
          <Button to='/directory'>View Houses</Button>
          <Button  to='/register'>Register</Button>
        </>
      }
      </Container>
     
 
  )
};

export default Nav;
