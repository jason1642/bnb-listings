import * as React from 'react';
import { useState, useEffect } from 'react';
import { BsDot } from "react-icons/bs";




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
  },
  spanStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '100%',

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
  width: 100%;
  padding: 0px 10px;
  font-size: 12px;
  color: #474747;
  justify-content: flex-start;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.167); */

`
const Item = styled.div`
    /* border: 1px solid black; */
    padding: 5px;
    display: flex;
    justify-content: center;
    flex-direction: row;
`
const Header = styled.div`
  

`
const Main = styled.div`
  flex-grow: 1;
`;
const SuperHost  = styled.div`
  width:100%;
  border-radius: 6px;
  /* border: 1px solid black; */
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.167); */
  background-color: #adffad;
  /* color: white; */
  /* height: 60px; */
  padding: 3px 0;
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
  padding: 15px 12px;
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
const Price = styled.div`
  /* width: 30px; */
  height: 100%;

`
const RowTwo = styled.div`
  display: flex;
  padding: 3px 0;
  border-radius: 2px;
  justify-content: space-around;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.167);


`;
const SpanItem = styled.div`

`
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
        <RowTwo>
          <SpanItem style={{color: 'purple'}}>
            Reviews: ({data.reviews.length})
        </SpanItem>
          <SpanItem style={{color: 'green'}}>
            Rating: {data.review_scores.review_scores_rating}
          </SpanItem>
        <Price>Price: {data.price.$numberDecimal ? data.price.$numberDecimal : data.price}$ / night</Price>
        </RowTwo>
      <DetailRow>
        <Item> Guests: {data.accommodates } <BsDot />
</Item>
        <Item> Bedrooms: {data.bedrooms }<BsDot /></Item>
        <Item> Beds: {data.beds }<BsDot /></Item>
        <Item> Bath: {Math.ceil(data.bathrooms.$numberDecimal) }</Item>
        </DetailRow>
        
</Header>

      <Main>
        {data.host.host_is_superhost &&
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
