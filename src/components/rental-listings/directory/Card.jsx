import React, {  useRef } from 'react';
// import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';


import {
  Container,Image, PropertyType, ImageContainer, InfoContainer, Name, Span, Price,RowOne,RowTwo, RowThree, ScoreNumber} from './card-styles'



// =================================
// Name can change to country or state
// =================================
const Card = ({data}) => {
  const hideContainer = useRef(0);
  const review_score = data.review_scores ? data.review_scores.review_scores_rating / 20 : '4.6'

  return (<Container to={`/listings/${data._id}`} ref={hideContainer} >
    <ImageContainer>
      <Image onError={() => hideContainer.current.style.display = "none"} src={data.images.picture_url} alt="Listings House" /> 
      
    </ImageContainer>
    

    <InfoContainer> 
      <RowOne>
        <Name>{data.address.street}</Name>
        <Span>
          <StarIcon style={{ color: '#ffcd50', }} />
          <ScoreNumber>{review_score}</ScoreNumber>
        </Span>
      </RowOne>

      
      <RowTwo>
        <PropertyType>{data.property_type}</PropertyType>

        <Price>${data.price.$numberDecimal} / night</Price>
        {/* <Country>{data.address.street}</Country> */}
      </RowTwo>
      
      <RowThree>

      </RowThree>
    </InfoContainer>

  </Container> );
}
 
export default Card;