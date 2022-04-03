import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import {
  Container,Image, Country, PropertyType, ImageContainer, InfoContainer, Name, Title, Price,RowOne,RowTwo,FavButton} from './card-styles'



// =================================
// Name can change to country or state
// =================================
const Card = ({data}) => {
  const hideContainer = useRef(0);


  return (<Container to={`/listings/${data._id}`} ref={hideContainer} >
    <ImageContainer>
      <Image onError={()=>hideContainer.current.style.display= "none"} src={data.images.picture_url} alt="Listings House"/> 
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