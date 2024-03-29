import * as React from 'react';
import styled from 'styled-components';
import Amenities from './Amenities';
import CostTable from './CostTable';

const Container = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  @media (max-width: 480px){
    flex-direction: column;
  }
`;



interface ISecondSectionProps {
  data: any;
}

const SecondSection: React.FunctionComponent<ISecondSectionProps> = ({data}) => {
  return (
    <Container>
      {data && 

      <><Amenities data={data} />
      <CostTable data={data} /></>
      }
    </Container>
  )
};

export default SecondSection;
