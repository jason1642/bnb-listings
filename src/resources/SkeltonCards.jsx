import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Skeleton} from '@mui/material'


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const styles = {
  skeleton: {
    margin: '15px',
    width: '20%',
    borderRadius: '5px',
  }
}
const dummyArray = ['string', 'something', 'filler', 'number', 'hiding', 'coolname',  'another', 'skeleton', 'rectangle', 'bigmargin', 'card', 'mapping']
const SkeletionCards = () => {
  return (<>
    {dummyArray.map(ele => <Skeleton
      style={styles.skeleton}
      key={ele}
      variant='rectangle'
      // width={250}
      height={250} />)}
    
  </> );
}
 
export default SkeletionCards;