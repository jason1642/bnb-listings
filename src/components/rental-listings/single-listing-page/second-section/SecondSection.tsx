import * as React from 'react';
import styled from 'styled-components';
import { Amenities } from './Amenities.tsx';
import CostTable from './CostTable.tsx';

const Container = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;



interface ISecondSectionProps {
}

const SecondSection = ({data}) => {
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
