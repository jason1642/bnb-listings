import * as React from 'react';
import styled from 'styled-components';
import SuggestionCards from './SuggestionCards';
import LoginPromo from './loginPromo';
const Container = styled.div`
    /* background-color:#57727A; */
    /* background-color:#EECE8F; */
    background-color:#A89B8D
;

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
  /* position: absolute; */
`
const ImageContainer = styled.div`
  position: relative;
  /* height: 100%; */
  z-index: 0;

`;
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
`
interface IIndexProps {
}

const Index: React.FunctionComponent<IIndexProps> = (props) => {
  return (
    <Container>
      <Title>Bed and Breakfast</Title>
      <Section>
        <ImageContainer>
        <Image src={'https://images.unsplash.com/photo-1648474814989-5f5be1d39aa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80'} />
        <ImageText>Find your next getaway</ImageText>
        </ImageContainer>
      </Section>



      <Section>
        <SuggestionCards />
      </Section>
      <Section>
        <LoginPromo />
      </Section>
    </Container>
  )
};

export default Index;
