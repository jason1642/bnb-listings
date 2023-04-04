import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { cardsInfo } from '../../resources/homeCardsInfo'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 140px;
  margin-bottom: 100px;
  overflow: hidden;
  @media (max-width: 480px) {
   width: 100%; 
   flex-wrap: wrap;
   margin-top: 70px;
   
  }
`;

const CardBody = styled(Card)`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  /* flex-grow: 1; */
  /* justify-content: center; */
  width: 280px;
  /* max-width: 340px; */
  margin: 10px;
  border-radius: 24px;
  /* height: 500px; */
  @media (max-width: 480px) {
   width: 45%; 
   margin: 10px 0;
   height: auto;
   background-color: #bf9f7e;
   border-radius: 14px;
  }`
// const CardImage = styled.img`
//   width: 100%;
//   height: 50%;
//   border-radius: 14px 14px 0 0;

// `


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
// const CardBody = styled.div`
//   padding: 10px;
//   background-color: #bf9f7e;
//   height: 40%;
//   /* margin: 10px 0; */
//   /* height: 46px; */
//   border-radius: 0 0 14px 14px;
// `
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
    
    {cardsInfo.map((data: any, i: number) =>
      <CardBody sx={{borderRadius: '15px'}} key={data.name + i}>
        <CardMedia 
          component="img"
          image={data.image} 
          height='240'
          // alt='location'
         />
        <CardContent sx={{backgroundColor: '#e4e8f5'}}>
          <Title>{data.name}</Title>
          <Text>
            {data.description}
          </Text>
          <ButtonLink to={`/areas/${data.name.toLowerCase()}`}>Learn more</ButtonLink>
        </CardContent>
      </CardBody>
    )}
  </Container> );
}
 
export default SuggestionCards;