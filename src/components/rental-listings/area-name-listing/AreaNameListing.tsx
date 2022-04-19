import styled from 'styled-components';
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import Card from '../directory/Card'
import {getAreaByName} from '../../../services/api-helpers.ts'
interface IAreaNameListingProps {
}

interface AnyObject { [key: string]: any };

const Container = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: flex-start;
  min-height: 100vh;
  flex-direction: column;
  padding-top: 40px;
`;



const CardContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  /* border: 1px solid black; */
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;

`;


const AreaNameListing: React.FunctionComponent<IAreaNameListingProps> = (props) => {
  const { name } = useParams();

  const [areaListings, setAreaListings] = useState<Array<AnyObject>>([]);
  useEffect(() => {

    // uppercase first letter of each word
    let capName: string = name.split(' ').map(str=>_.capitalize(str)).join(' ')
 
    
    getAreaByName(capName).then((res) => {
      setAreaListings(res)
    }, err => console.log(err))
    console.log(areaListings)
  }, []);

  useEffect(() => {
    console.log(areaListings)
  }, [areaListings]);
  return (
    <Container>
      This is a list of places from the parameter


      <CardContainer>
        {areaListings.length > 0 && areaListings.map((ele, i) =><Card key={i} data={ele} /> )}
      </CardContainer>
    </Container>
  );
};


export default AreaNameListing;
