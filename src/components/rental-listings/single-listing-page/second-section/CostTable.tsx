import { useState, useEffect } from 'react';
import styled from 'styled-components';



interface Total {
  nightState: number,
  nightPrice: number,
  extraState: number,
  extraPrice: number,
  cleaningFee: number
}
const calculateTotal = ({ nightState, nightPrice, extraState, extraPrice, cleaningFee }: Total) => {
  // console.log(nightState, nightPrice, extraState, extraPrice, cleaningFee)
  const nightlyTotal = nightState * +nightPrice;
  const extraTotal = extraState * +extraPrice;
  return nightlyTotal + extraTotal + +cleaningFee
}




const Container = styled.div`
display: flex;
flex-direction: column;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  width: 39%;
  /* border: 1px solid black; */
  height: 100%;
  justify-content: space-between;
  @media (max-width: 480px){
    width: 100%;
  }
`;
const Title = styled.div`
  /* border: 1px solid black; */
  padding: 10px;
  font-weight: 300;
  font-size: 2.2rem;
`;
const Table = styled.div`
  height: 100%;
`
// interface ICostTableProps {
// }
const Row = styled.div`
  width: 95%;
  padding: 14px 10px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 1.2rem;
  `
  const ButtonRow = styled.div`
    display: flex;
    justify-content: space-around;
    /* border: 1px solid black; */
    flex-direction: row;
    padding: 10px 10px;
    width: 95%;
  `;
const Label = styled.div`

`
const Cost = styled.div`

`
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 0px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1.4rem;
  padding:0px 9px;
  height: 35px;
  width: 35px;
  background-color: orange;
  @media (max-width: 480px){
    padding:4px 9px;
    height: auto;
  }
`
const Span = styled.div`
  font-size: 1.3rem;
  margin: 0 5px;
  @media (max-width: 480px){
    font-size: 20px;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
// const Total = styled.div`
  
// `;
const CostTable = ({ data }: {data: any}) => {
  const [numNights, setNumNights] = useState(1);
  // See accomdates for max extra
  const [numExtraPeople, setNumExtraPeople] = useState(0);
  // price, security deposit, cleaning fee, extra people? - total
  // have buttons to allow user to add up to 7 nights, multiplying price by nights

  const handleNightClick = (e: any) => {
      const name = e.target.name

    if (name === 'increase' && (numNights < 7)) {
      setNumNights(prev => ++prev)
    } else if (name === 'decrease' && (numNights > 1)) {
      setNumNights(prev => --prev)
    }

  }
  const handleExtraClick = (e: any, max: number) => {
    const name = e.target.name;
    if (name === 'increase' && (numExtraPeople < max)) {
      setNumExtraPeople(prev => ++prev)
      
    } else if (name === 'decrease' && (numExtraPeople > 0)) {
      setNumExtraPeople(prev=>--prev)
    }
  }
  useEffect(() => {
    // console.log(numExtraPeople)
  },[numExtraPeople])
  return (
    <Container>
     <Title>Cost Summary</Title>
      
      <Table>
        <Row>
          <Label>${data.price.$numberDecimal} / {numNights} nights</Label><Cost>${numNights * data.price.$numberDecimal}</Cost>
        </Row>
        <Row>




          <Label>Cleaning fee</Label>
          <Cost>${data.cleaning_fee && data.cleaning_fee.$numberDecimal ? data.cleaning_fee.$numberDecimal : data.cleaning_fee}</Cost>
        </Row>
        <Row>
          <Label>${Math.ceil( data.extra_people.$numberDecimal ? data.extra_people.$numberDecimal : data.extra_people )} / Extra guests (Max = {data.accommodates})</Label><Cost>${Math.ceil(numExtraPeople * data.extra_people.$numberDecimal)}</Cost>
          
        </Row>

          <Row>
          <Span>Nights: {numNights}</Span>
          <Span>Guests: {numExtraPeople}(max: {data.accommodates})</Span>
          </Row>

        <ButtonRow>
          
       
          <Wrapper>
          <Button
            onClick={handleNightClick}
            name='decrease'
          >-</Button>
            <Span>Add Night</Span>
          
          <Button
            onClick={handleNightClick}
            name='increase'
            >+</Button>
          </Wrapper>

        <Wrapper>
          <Button
            onClick={(e) => handleExtraClick(e, data.accommodates)}
            name='decrease'
          >-</Button>
          <Span>Add Guest</Span>
          <Button
            onClick={(e) => handleExtraClick(e, data.accommodates)}
            name='increase'
            >+</Button>
          </Wrapper>
          
        </ButtonRow>


        <Row
        style={{borderTop: '1px grey solid',borderBottom: 'none'}}
        ><Span>Book Now</Span>
        <Span>Total price: ${calculateTotal({
          nightState: numNights,
          nightPrice: data.price.$numberDecimal,
          extraState: numExtraPeople,
          extraPrice: typeof data.extra_people !== 'object' ? data.extra_people : data.extra_people.$numberDecimal,
          cleaningFee: data.cleaning_fee ? data.cleaning_fee.$numberDecimal : 0
        })
        .toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</Span>
      </Row>
      </Table>

      
      
    </Container>
  )
};

export default CostTable;
