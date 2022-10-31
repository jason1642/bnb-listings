import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Filter from '../../search/filter/Filter.tsx';
import Card from './Card'
import SkeletionCards from '../../../resources/SkeltonCards';

const Container = styled.div`
    /* background-color: #807770; */

  display: flex;
  justify-content: flex-start;
  min-height: 100vh;
  flex-direction: column;
  /* padding-top: 40px; */
  flex-wrap: wrap;
  @media (max-width: 480px){
    width: 100%;
    padding-top: 90px;
  }
  /* border: 1px solid black; */
  `;
const Header = styled.div`
  
  `
const Title = styled.div`
  font-size: 35px;
  font-weight: 300;
  margin: 8px 0 10px 0;
  @media (max-width: 480px){
    display: none;
  }
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

  const handleFilter = data => {
    console.log(data)
    setListings(data)
  }

  useEffect(() => {
    console.log(listings)
  }, [listings]);

  return (<Container>
    <Header>
      {/* <Title>Search </Title> */}
      <Filter
        listingsLength={ listings && listings.length}
        handleFilter={handleFilter}  />
    </Header>
    
    
    <CardContainer>

    
    {
      listings && listings.length > 0 ?listings.map((data, i) => 
        <Card
          key={i}
          data={data} /> 
        ) : 
          <SkeletionCards />
    }
  </CardContainer>
  </Container> );
}
 
export default Index;