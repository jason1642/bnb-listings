import * as React from 'react';
import styled from 'styled-components';
// import siteLogo from '../../resources/treeLogo.svg';
import Nav from './Nav'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Toolbar } from '@mui/material';
// import { MenuItem } from '@mui/material';
// const Main = styled.div`
//   display: flex;
//   position: fixed;
//   width: 100%;

//   background-color: #807770;
//   z-index: 6000;
//   justify-content: space-between;
//   align-items: center;
//   @media (max-width: 480px) {
//     border-bottom: 1px solid black;
//     max-height: 70px;
//     height: 70px;
//   }
// `; 


const styles = {
  logo: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: '2.3rem',
    
  },
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  container: {
    backgroundColor: '#807770',
    // maxHeight: 75,
    // padding: '10px',
  },
  secondContainer: {
    height: '100%',
  }
}
const Logo = styled.img`
  height: 100%;
  width: 50px;
  @media (max-width: 480px) {
    height: 60px;
  }
`;
const LogoContainer = styled(Link)`
  /* height: 100%; */
  /* width: 50%; */
  text-decoration: none;
  color: white;
  &:hover{
    color: white,
  }
`;


const ButtonLink = styled(Link)`
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
  
  return (
    <AppBar  style={styles.container}  position='static' id='outer-container'>
      <Container style={styles.secondContainer} maxWidth={false}>
        <Toolbar
          style={styles.wrapper}
          disableGutters>
          <LogoContainer
            to='/'
          >
          <Typography variant="h3"
            style={styles.logo}
              noWrap
              
            component="div"
          >
              Air Bed and Breakfast
    </Typography>
          </LogoContainer>
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center'
          }}>
            {/* <MenuItem> */}
              <ButtonLink to='/directory'>
            <Button size='large' sx={{my:2, fontSize: '1.3em',color: 'white', display: 'block'}}>Search Rooms</Button> 
            </ButtonLink>
          {/* </MenuItem> */}

            <Nav currentUser={currentUser} /></div>
          </Toolbar>
      </Container>
        {/* </Main> */}
  </AppBar>
      
    
  )
};

export default Index;
