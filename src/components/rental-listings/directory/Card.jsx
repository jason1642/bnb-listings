import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  Container,Image, Country, PropertyType, ImageContainer, InfoContainer, Name, Title, Price,RowOne,RowTwo,FavButton} from './card-styles'



// =================================
// Name can change to country or state
// =================================
const Card = ({data}) => {

  useEffect(()=> {
    // console.log(data)
  }, [data])
  

  return (<Container>
    <ImageContainer>
      <Image src={data.images.picture_url} alt="Listings House"/> 
    </ImageContainer>
    

    <InfoContainer>
      <RowOne>
        <Name>{data.name}</Name>
        <PropertyType>{data.property_type}</PropertyType>
      </RowOne>

      
      <RowTwo>
        <Price>${data.price.$numberDecimal} / night</Price>
        <Country>{data.address.street}</Country>
    </RowTwo>
    </InfoContainer>

  </Container> );
}
 
export default Card;