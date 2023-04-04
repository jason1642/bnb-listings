import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {removeToken} from '../../services/api-helpers'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

interface INavProps {
  currentUser: any
}
const InnerLink = styled(Link)`
  text-decoration: none;
`;   

const Nav: React.FunctionComponent<INavProps> = ({ currentUser }: INavProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
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
    >

      {currentUser ?
        [
        <MenuItem onClick={handleClose}><InnerLink to='/directory'>View Houses</InnerLink></MenuItem>,
          <MenuItem onClick={handleClose}><InnerLink to='/account/favorites' >View Favorites</InnerLink></MenuItem>,
          <MenuItem onClick={handleClose}><InnerLink to='/account' >My Account</InnerLink></MenuItem>,
          <MenuItem onClick={()=> {
            handleClose()
            removeToken()
            window.location.reload();
          }}><InnerLink to='/' >Log Out</InnerLink></MenuItem> 

        ]
        :
     [
          <MenuItem onClick={handleClose} ><InnerLink to='/directory'>View Houses</InnerLink></MenuItem>,
          <MenuItem onClick={handleClose} ><InnerLink to='/register'>Register</InnerLink></MenuItem>,
          <MenuItem onClick={handleClose} ><InnerLink to='/login'>Log In</InnerLink></MenuItem>
     ]
      }
      </Menu>
      </div>
 
  )
};

export default Nav;
