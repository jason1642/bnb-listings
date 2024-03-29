import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import qs from 'qs';
import { getManyByQuery } from '../../../services/api-helpers';
import { CircularProgress } from '@mui/material';
// import e from 'express';
// import _ from 'lodash';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 25px 0px;
`;


const SearchBanner = styled.div`
  padding: 15px 20px;
  font-size: 1.8em;
  font-weight: 300;
`

const Group = styled.div`
  display: flex;
  @media (max-width: 480px){
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-evenly;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */
  padding: 12px;
  background-color: #87756cc3;
  font-size: 13px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 14px;

  align-items: center;
`;
const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  gap: 4px;
  background-color: #d0c6bb;
  margin: 0 20px;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover{
    cursor: pointer;
  }
  @media (max-width: 480px){
    padding: 8px;
  }
`

const Option = styled.input`
  border: 1px solid black;
`;
// const Title = styled.div`
//   font-size: 26px;
//   font-weight: 300;
// `;



const Filter = ({handleFilter, listingsLength}: {handleFilter: Function, listingsLength: number}) => {


  // Filters: country, city, price, beds, accomodation(guests), options from amenities array 
  // Should be spelled same as in database model
  // Probably just a single object property or string to be used in query
  const [searchResults, setSearchResults] = useState<Array<any>>([]);
 
  // ========================================================
  // ====   Query mongoose, embedded documents - jsn string to access object "address.country" : "United States"
  // =======Queries are case sensitive, use function to cap first letter 
  // ========================================================
  // address.market = city, display n umber of matches found and reset button
  // ========================================================

  
  // when user checks box, it gets added to object with lodashes assign

  interface AnyObject { [key: string]: any };

  // Val is an array from query, bool if true adds to array false filters

    

  const [checkboxOptions, setCheckboxOptions] = useState<{[index: string]: any}>({
    House: false,
    Apartment: false,
    Loft: false,
    Condominium: false,
  });


  // const [activeOptions, setActiveOptions] = useState([]);
  const handleArrayChange = (val: string, bool: boolean, optionName: string, queryArr?: Array<AnyObject>) => {
    if (bool) {
      console.log(queryArr)
      setSearchResults(prev => [...prev, ...(queryArr?.reverse() || [])])
    } else {
      const filteredArray = searchResults.filter(ele=> ele.property_type !== val)
      setSearchResults(filteredArray)
    }
}

  // Toggle, adds to query params object value array and removes - should be followed by an api call
  const handleCheckboxChange = (e: any) => {
    console.log('TOGGLE FUNCTION')
    const optionValue = e.target.value;
    const oppositeBool: boolean = !checkboxOptions[e.target.value];
    // Toggles options object based on element name respectively
    // Cannot use state value within this function due to not updating for some reason, only after function
    setCheckboxOptions(prev => ({
      ...prev,
      [e.target.value]: !checkboxOptions[e.target.value]
    }))
    // check the prop in the object, if true add to query params, if false
    // take it out of the array if its there
    for (const key in checkboxOptions) {
      // look for matching key in array and value from checkbox and add to query array if true,
      if (key === optionValue) {
        if (oppositeBool === true) {
          // setPropertyTypeArray(prev => [...prev, optionValue]);
   
          getManyByQuery({
            params: 
              // mongoose can query array to find different values of same property
              // all values should be Objects to be queried one at a time and added to state array and taken out on toggle
              // "address.country": ['Portugal'],
             {[e.target.name]: optionValue } // Object
      , paramsSerializer: (params: any) => {
          return qs.stringify(params, { indices: false })
        }
          }).then(res => {

            // console.log(res)
            
            handleArrayChange(optionValue, true,  e.target.name, res,);
            // console.log(searchResults)
           
            // console.log(res, 'filter params');
      }, err=> console.log(err))

        } else if (oppositeBool === false) {
          handleArrayChange(optionValue, false,  e.target.name, undefined);
        }
      }
    }
  }   
  
  useEffect(() => {

    getManyByQuery(
    { params: { 'address.country': 'United States' } }).then((res) => {
      console.log(res)
      setSearchResults(res)
    }, err => console.log(err));
}, [])

  useEffect(() => {
    console.log(searchResults)
    handleFilter(searchResults)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults])
           
  // If turned true, query and add to array, if turned false filter array of prop
  return (<Container>
    
    <Form>
      {/* <Title>Filters</Title> */}
      <Group>
        <Label>House<Option
        onChange={handleCheckboxChange}

        type='checkbox'
        value={'House'}
        name={'property_type'}
      /></Label>
     <Label>Apartment <Option
        onChange={handleCheckboxChange}

        type='checkbox'
        value={'Apartment'}
        name={'property_type'}
      /></Label>
      <Label>Loft<Option
        onChange={handleCheckboxChange}
        type='checkbox'
        value={'Loft'}
        name={'property_type'}
      /></Label>
      <Label>Comdoninium<Option
        onChange={handleCheckboxChange}
        type='checkbox'
        value={'Condominium'}
        name={'property_type'}
      /></Label>
      </Group>
      
      {/* <Group></Group> */}
    </Form>
    {listingsLength < 1 ? <CircularProgress sx={{marginTop: '15px'}} /> : <SearchBanner>
      Displaying {listingsLength} results
    </SearchBanner>}
  </Container> );
}
 
export default Filter;