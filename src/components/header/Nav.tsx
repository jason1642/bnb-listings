import * as React from 'react';
import {useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import {slide as Menu} from 'react-burger-menu'
import {removeToken} from '../../services/api-helpers'
// import { bindActionCreators } from 'redux';
// import { userActions } from '../../redux/index';
// import { useDispatch } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
const styles: any = {
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
const InnerLink = styled(Link)`
  text-decoration: none;
`;   
// const Button = styled(Link)`
//   font-size: 1.3em;
//   height: 30px;
//   padding: 5px 16px;
//   text-decoration: none;
//   color: black;
//   width: 150px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `   
const handleLogout = ( ) => {
  localStorage.clear();
  removeToken();
  console.log('You are logged out')
  window.location.reload();
}



const Nav: React.FunctionComponent<INavProps> = ({ currentUser }: INavProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const dispatch = useDispatch()
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  

  // const {logUser} = bindActionCreators(userActions, dispatch);
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
  <Button
        id="basic-button"
        variant='text'
        sx={{color: 'black'}}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{fontSize: '3.5em'}} />
      </Button>
    
    <Menu
      open={open}       
      onClose={handleClose}
      anchorEl={anchorEl}

      // styles={styles}   
      // outerContainerId={"outer-container"}
      // pageWrapId={"page-wrap"}
    >

      {currentUser.authenticated ?
        <>
        <MenuItem onClick={handleClose}><InnerLink to='/directory'>View Houses</InnerLink></MenuItem>
          <MenuItem onClick={handleClose}  ><InnerLink to='/account/favorites' >View Favorites</InnerLink></MenuItem>
          {/* <MenuItem onClick={()=>setIsOpen(false)}  to={`/account`}>My Account</MenuItem>
          <MenuItem onClick={() => {
            handleLogout()
            setIsOpen(false)
          }
          } to='/'>Log Out</MenuItem> */}
        </>
        :
        <>
          {/* <Button to='/directory' onClick={()=>setIsOpen(false)} >View Houses</Button>
          <Button  to='/register' onClick={()=>setIsOpen(false)} >Register</Button>
          <Button  to='/login' onClick={()=>setIsOpen(false)} >Log In</Button> */}
        </>
      }
      </Menu>
      </div>
 
  )
};

export default Nav;
