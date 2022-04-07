import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { cardsInfo } from '../../resources/homeCardsInfo'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid  black;
  min-height: 70vh;
  margin: 140px 0 0 0 ;
`;

const Card = styled.div`
  width: 190px;
  margin: 10px;
  border-radius: 14px;
  height: 300px;

`
const CardImage = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 14px 14px 0 0;

`


const ButtonLink = styled(Link)`
  border-radius: 10px;
  padding: 3px 15px;
  margin-top: 12px;
  border-width: 0px;
  background-color: #5353e3;
  color: white;
  text-decoration: none;

`
const CardBody = styled.div`
  padding: 10px;
  background-color: #bf9f7e;
  height: 40%;
  border-radius: 0 0 14px 14px;
`
const Text = styled.div`
  font-size: .9em;
  padding: 5px;
`;



const Title = styled.div`
  
`;


// ========================================
// Replace information on these cards with filtered data, that returns four random or same documents and display their
// data with appropriate links.
// ========================================


// Cards with pictures suggesting houses based on a certain filter
const SuggestionCards = () => {
  return (<Container>
    
    {cardsInfo.map((data, i) =>
      <Card>
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