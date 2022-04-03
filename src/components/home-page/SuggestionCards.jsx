import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap'
import {cardsInfo} from '../../resources/homeCardsInfo'
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid  black;
  min-height: 70vh;
  margin: 140px 0 0 0 ;
`;



const styles = {
  container: {
    width: '21%',
    margin: '10px',
    // border: '1px solid black',
    borderRadius: '14px',
    height: '300px'
  },
  cardImage: {
    width: '100%',
    height: '50%',
    borderRadius: '14px 14px 0 0'
  },
  buttonLink: {
    borderRadius: '10px',
    padding: '6px 11px',
    borderWidth: '0px'
  },
  cardBody: {
    padding: '10px',
    backgroundColor: '#EECE8F',
    height: '40%',
    borderRadius: '0 0 14px 14px'
  }
}

// ========================================
// Replace information on these cards with filtered data, that returns four random or same documents and display their
// data with appropriate links.
// ========================================


const { container, cardImage, buttonLink, cardBody } = styles;
// Cards with pictures suggesting houses based on a certain filter
const SuggestionCards = () => {
  return (<Container>
    
    {cardsInfo.map((data, i) =>
      <Card style={container}>
        <Card.Img style={cardImage} variant="top" src={data.image} />
        <Card.Body style={cardBody}>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            {data.description}
          </Card.Text>
          <Button style={buttonLink }variant="primary">See more</Button>
        </Card.Body>
      </Card>
    )}
  </Container> );
}
 
export default SuggestionCards;