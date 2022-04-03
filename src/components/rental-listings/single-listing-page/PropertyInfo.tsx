import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import IntroSection from './intro-section/IntroSection.tsx';


const Container = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
// typescript method returns object

class Options {
  _id: string;
  method: string;
  baseURL: string;
  constructor(_id: string) {
    this._id = _id;
    this.method = 'get';
    this.baseURL = 'http://localhost:5040/api/airbnb/listings/rooms/' + this._id;
  }
}

const SingleListingPage = () => {
  const { _id } = useParams();
  const newOptions: {
    
  } = new Options(_id)
  const [listingData, setListingData] = useState();

  useEffect(() => {
    console.log(_id)
    axios(newOptions).then(res => {
      setListingData(res.data);
      console.log(res)
    }, err=> console.log(err))

  }, [])
  
  // introsection has two sides/components
  return (<Container>
    {listingData && <>
      <IntroSection
        data={listingData} />
    </>}
  </Container> );
}
 
export default SingleListingPage;