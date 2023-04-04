import { BsDot } from "react-icons/bs";
import styled from 'styled-components';

const styles: any = {
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
  padding: 10px;
  /* border: 1px solid black; */
  
  height: 100%;
  border-radius: 14px;
  @media (max-width: 480px){
    width: 100%;
  }
  @media (max-width: 480px){
    justify-content: center;
    align-items: center;
  }
  /* background-color: orange; */
`
const Title = styled.h2`
  display: flex;
  font-size: 2.2rem;
  font-weight: 300;
  padding: 15px 0px;
  padding-left: 25px;
  /* border-radius: 14px */
  width: 90%;
  @media (max-width: 480px){
    /* text-align: right; */
    width: auto;
    /* padding: 15px; */
    margin: 0 auto;
  }
  /* background-color: #3d3d3d; */
`;

const DetailRow = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 10px;
  font-size: 1em;
  color: #474747;
  justify-content: flex-start;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.167); */

`
const Item = styled.div`
    /* border: 1px solid black; */
    padding: 5px;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const Header = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.135), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  border-radius: 4px;
  margin-top: 5px;
  font-size: 1.3rem;
  font-weight: 400;
  text-align: left;
  line-height: 2rem;
  padding: 15px 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media (max-width: 480px){
    box-shadow: none;
    font-size: 16px;
  }
`
const Button = styled.button`
  text-decoration: underline;
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 1em;
  display: flex;
  margin: 0 auto;
  &:hover{
    cursor: pointer;
  }
`;
const Price = styled.div`
  /* width: 30px; */
  height: 100%;

`
const Span = styled.span`
  /* display: flex; */
`;
const RowTwo = styled.div`
  display: flex;
  padding: 3px 10px;
  border-radius: 2px;
  justify-content: space-around;
  align-self: flex-start;
  gap: 6px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.167); */
  @media (max-width: 480px){
    box-shadow: none;
  }

`;
const SpanItem = styled.div`

`

const ParagraphTitle = styled.span`
  /* display: inline-flex; */
  font-size: 1.1em;
  font-weight: 500;

`;
const LocationRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
`;


interface IInfoContainerProps {
}

const InfoContainer: React.FunctionComponent<{data: any, openModal: Function}> = ({ data, openModal }) => {
  
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
          <SpanItem style={{color: '#1530f9'}}>
            Reviews: ({data.reviews.length})
        </SpanItem>
          {data.review_scores && <SpanItem style={{color: 'green'}}>
            Rating: {data.review_scores.review_scores_rating}
          </SpanItem>}
        <Price>Price: {data.price.$numberDecimal ? data.price.$numberDecimal : data.price}$ / night</Price>
        </RowTwo>
      <DetailRow>
        <Item> Guests: {data.accommodates } <BsDot />
</Item>
        <Item> Bedrooms: {data.bedrooms }<BsDot /></Item>
        <Item> Beds: {data.beds }<BsDot /></Item>
        <Item> Bath: {Math.ceil(data.bathrooms.$numberDecimal) }</Item>
        </DetailRow>
        <LocationRow>Location: {data.address.street}</LocationRow>
        
</Header>

      <Main>
        {data.host.host_is_superhost &&
          <SuperHost>
            <p style={styles.superhostTitle}
            >{data.host.host_name}is a Superhost.</p> 
            <p style={styles.superhostDescription}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>

          </SuperHost>
        }
        <Description>
          {data.summary}
          {data.access !== '' && <div style={{marginTop: '10px',}}>
          <ParagraphTitle>Guest Access: </ParagraphTitle>
          <Span>{data.access}</Span> </div>}
          <Button
            onClick={()=>openModal()}
          >Show more </Button>
        
        </Description>
      </Main>
      
    </Container>
  )
};

export default InfoContainer;
