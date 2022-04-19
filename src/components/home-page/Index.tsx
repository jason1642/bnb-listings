import * as React from 'react';
import styled from 'styled-components';
import SuggestionCards from './SuggestionCards';
import LoginPromo from './loginPromo';
import { Link } from 'react-router-dom';

const Container = styled.div`
    /* background-color:#57727A; */
    /* background-color:#EECE8F; */
    background-color:#A89B8D;

  height: 100%;
  padding: 60px 0;
`;
const Title = styled.div`
  font-size: 30px;
  margin: 12px 0;
  padding: 0;
  color: white;
`;
const Section = styled.div`
  
`;
const Image = styled.img`
  width :60%;
  border-radius: 10px;
  z-index: 0;
  @media (max-width: 480px) {
   width: 100%; 
  }
  /* position: absolute; */
`
const Span = styled(Link)`
  text-decoration: none;
  color: black;

  `
const ImageContainer = styled(Link)`
  position: relative;
  z-index: 0;
  @media (max-width: 480px) {
    width: 100%;
    min-height: 290px;
  }`;
const ImageText = styled.span`
  position: absolute;
  color: white;
  background-color: #c0c0c0a3;
  border-radius: 10px;
  padding: 10px;
  font-weight: 600;
  font-size: 40px;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 480px) {
   width: 100%; 
  }`
interface IIndexProps {
  currentUser: any,
}

const Index: React.FunctionComponent<IIndexProps> = ({currentUser}) => {
  return (
    <Container>
      <Title>My Airbnb</Title>
      <Section>
        <ImageContainer to='/directory'>
        <Image src={'https://images.unsplash.com/photo-1648474814989-5f5be1d39aa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80'} />
        <ImageText>Find the right stay</ImageText>
        </ImageContainer>
      </Section>



      <Section>
        <SuggestionCards />
      </Section>


      {!currentUser.authenticated ?
      <Section>
        <LoginPromo />
        </Section>
        : <Section>

            <Span to='/directory'>Looking for a specific stay? Try using our search feature in the directory!</Span>
        </Section>
       
    }
      
    </Container>
  )
};

export default Index;
