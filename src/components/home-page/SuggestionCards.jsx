import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { cardsInfo } from '../../resources/homeCardsInfo'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* border: 1px solid  black; */
  /* min-height: 70vh; */
  margin-top: 140px;
  margin-bottom: 100px;
  @media (max-width: 480px) {
   width: 100%; 
   flex-wrap: wrap;
   margin-top: 70px;
   
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  justify-content: center;
  width: 340px;
  margin: 10px;
  border-radius: 14px;
  height: 500px;
  @media (max-width: 480px) {
   width: 45%; 
   margin: 10px 0;
   height: auto;
   background-color: #bf9f7e;
   border-radius: 14px;
  }`
const CardImage = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 14px 14px 0 0;

`


const ButtonLink = styled(Link)`
  display: flex;
  border-radius: 10px;
  padding: 3px 15px;
  margin: 0 auto;
  margin-top: 12px;
  justify-content: center;
  /* justify-self: center;
  align-self: flex-end; */
  border-width: 0px;
  font-size: 1.4em;
  background-color: #5353e3;
  color: white;
  text-decoration: none;
  /* justify-self: flex-end; */
  @media (max-width: 480px) {
   width: 70%; 
   /* justify-items: center; */
  }
`
const CardBody = styled.div`
  padding: 10px;
  background-color: #bf9f7e;
  height: 40%;
  /* margin: 10px 0; */
  /* height: 46px; */
  border-radius: 0 0 14px 14px;
`
const Text = styled.div`
  font-size: 1.2em;
  padding: 5px;
  line-height: 18px;
  /* height: 60px; */

`;



const Title = styled.div`
  font-size: 1.5em;
`;


// ========================================
// Replace information on these cards with filtered data, that returns four random or same documents and display their
// data with appropriate links.
// ========================================


// Cards with pictures suggesting houses based on a certain filter
const SuggestionCards = () => {
  return (<Container>
    
    {cardsInfo.map(data =>
      <Card key={data.name}>
        <CardImage  variant="top" src={data.image} />
        <CardBody>
          <Title>{data.name}</Title>
          <Text>
            {data.description}
          </Text>
          <ButtonLink to={`/areas/${data.name.toLowerCase()}`}>See more</ButtonLink>
        </CardBody>
      </Card>
    )}
  </Container> );
}
 
export default SuggestionCards;