import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Filter from '../../search/filter/Filter.tsx';
import Card from './Card'



const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  padding-top: 50px;
  /* border: 1px solid black; */
  `;
const Header = styled.div`
  
  `
const Title = styled.div`

`
const CardContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  /* border: 1px solid black; */
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;

`;

const Index = () => {

  const [listings, setListings] = useState();

  useEffect(() => {
    // axios.get('http://localhost:5040/api/airbnb/listings/all').then(res => {
    //   console.log(res.data);
    //   setListings(res.data)
    // }, err => console.log(err))
  }, [])

  return (<Container>
    <Header>
      his is the directory
    <Filter />
    </Header>
    T
    
    <CardContainer>

  
    {
      listings && listings.map((data, i) => 
        <Card
          key={i}
          data={data} />
      )
    }
  </CardContainer>
  </Container> );
}
 
export default Index;