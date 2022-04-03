import * as React from 'react';
import { useState, useEffect } from 'react';


import styled from 'styled-components';

const styles = {
  superhostTitle: {
    fontWeight: '600',
    margin: '0',
    fontSize: '14px',
    padding: '3px 0px 2px 0px',
    textAlign: 'left',
    marginLeft: '15px'
  },
  superhostDescription: {
    margin: '0',
    marginLeft: '15px',
    textAlign: 'left',
    fontSize: '12px',
    lineHeight: '15px',
    // padding: '2px',
    color: '#4c4c4c',
  }
}

const Container = styled.div`
  display: flex;
  flex-direction:column ;
  width: 50%;
  /* border: 1px solid black; */
  height: 100%;
  border-radius: 14px;
  /* background-color: orange; */
`
const Title = styled.div`
  display: flex;
  font-size: 26px;
  font-weight: 300;
  padding: 15px 0px;
  padding-left: 25px;
  /* border-radius: 14px */
  width: 90%;
  /* background-color: #3d3d3d; */
`;

const DetailRow = styled.div`
  display: flex;
  width: 80%;
  padding: 5px 10px;

`
const Item = styled.div`
    /* border: 1px solid black; */
    padding: 5px;
`
const Header = styled.div`
  

`
const Main = styled.div`
  flex-grow: 1;
`;
const SuperHost  = styled.div`
  width:100%;
  border-radius: 10px;
  /* border: 1px solid black; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.167);

  height: 60px;
  padding: 0;
`;
const Description = styled.div`
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.135), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  line-height: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Button = styled.button`
  text-decoration: underline;
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 1em;
  &:hover{
    cursor: pointer;
  }
`;
interface IInfoContainerProps {
}

const InfoContainer = ({ data, openModal }) => {
  
  // If host is superhost display banner, if not hide 
  //display host picture
  // Review section

  return (
    <Container>
      <Header>
      <Title>
        {data.name}
      </Title>
      <DetailRow>
        <Item> Guests: {data.accomodates }</Item>
        <Item> Bedrooms: {data.bedrooms }</Item>
        <Item> Beds: {data.beds }</Item>
        <Item> Bath: {Math.ceil(data.bathrooms.$numberDecimal) }</Item>
      </DetailRow>
</Header>

      <Main>
        {!data.host.host_is_superhost &&
          <SuperHost>
            <p
              style={styles.superhostTitle}
            >{data.host.host_name}is a Superhost.</p> 
            <p style={styles.superhostDescription}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>

          </SuperHost>
        }
        <Description>
          {data.summary}
          <Button
            onClick={openModal}
          >Show more </Button>
        
        </Description>
      </Main>
      
    </Container>
  )
};

export default InfoContainer;
