import * as React from 'react';
import styled from 'styled-components';
import Nav from './Nav'
import { Link } from 'react-router-dom';
import { AppBar, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Toolbar } from '@mui/material';
import { userApi } from '../../redux/features/userApi';

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

  },
  secondContainer: {
    height: '100%',
  }
}

const LogoContainer = styled(Link)`

  text-decoration: none;
  color: white;
  &:hover{
    color: white,
  }
`;


const ButtonLink = styled(Link)`
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
`
const Index = () => {
  const {data, isLoading } = userApi.endpoints.verifyUser.useQueryState()

  React.useEffect(() => {
    // console.log(data)
  }, [data]);
  
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
              <ButtonLink to='/directory'>
            <Button size='large' sx={{my:2, fontSize: '1.3em',color: 'white', display: 'block'}}>Search Rooms</Button> 
            </ButtonLink>

           {!isLoading && <Nav currentUser={data} />}
            </div>
          </Toolbar>
      </Container>
  </AppBar>
      
    
  )
};

export default Index;
