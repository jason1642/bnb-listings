import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import _ from 'lodash';
const Container = styled.div`
  display: flex;

`;

const Button = styled.div`

`

const myParams = {

}
const Form = styled.form`
  
`;

const Option = styled.input`
  
`;
const Title = styled.div`
  
`;

const Filter = () => {


// Filters: country, city, price, beds, accomodation(guests), options from amenities array 
// Should be spelled same as in database model
// Probably just a single object property or string to be used in query
  const [filterOptions, setFilterOptions] = useState(
    {
      "property_type": []
    }
  );
 
// ========================================================
// ====   Query mongoose, embedded documents - jsn string to access object "address.country" : "United States"
// =======Queries are case sensitive, use function to cap first letter 
// ========================================================
// I must somehow set state or call function and pass a dynamic prop and value object to
//  send to a query function, i guess buttons can be hardcoded to filter, search can just look for country 
// address.market = city, display number of matches found and reset button
// ========================================================
  useEffect(() => {
    // axios.get('http://localhost:5040/api/airbnb/listings/query', {
    //   params: {
    //     // use template literal
    //       // mongoose can query array to find different values of same property

    //     "address.country": ['Portugal'],
    //     "property_type": "Condominium"
        
    //     } 
    // }).then(res => {
    //   console.log(res, 'filter params')
    //   }, err=> console.log(err))
  }, [])
  class checkbox {
    isChecked;
    constructor(isChecked = false, ) {
      this.isChecked = isChecked;
    }
    toggleChecked() {
      this.isChecked = !this.isChecked
    }
  }
  
  // when user checks box, it gets added to object with lodashes assign




    

  const [checkboxOptions, setCheckboxOptions] = useState({
    house: false,
    apartment: false,
    loft: false,
    condominium: false,
  })
  const [propertyTypeArray, setPropertyTypeArray] = useState<Array<string>>([
    'house', 'loft', 'qweqwe'
  ]);
  // Toggle, adds to query params object value array and removes - should be followed by an api call
  const handleCheckboxChange = (e: any) => {
    const optionValue = e.target.value;
    // Toggles options object based on element name respectively
    setCheckboxOptions(prev => ({
      ...prev,
      [e.target.value]: !checkboxOptions[e.target.value]
    }))
    // check the prop in the object, if true add to query params, if false
    // take it out of the array if its there
    for (const key in checkboxOptions) {
      // look for matching key in array and value from checkbox and add to query array if true,
      if (key === optionValue) {
        if (checkboxOptions[key] === true) {
          setPropertyTypeArray(prev => [...prev, optionValue]);

        } else if (checkboxOptions[key] === false) {

          const temp = propertyTypeArray.filter(name => name !== optionValue)
          setPropertyTypeArray(temp)
        }
      }
    }
 }   
           
  
    
  // since toggle function changes state, this should run a query and return data. Maybe through react redux
  useEffect(() => {

    axios.get('http://localhost:5040/api/airbnb/listings/query', {
      params: {
        // use template literal
          // mongoose can query array to find different values of same property
        // all values should be arrays where strings can be added or taken out
        // "address.country": ['Portugal'],
        "property_type": propertyTypeArray
        
        } 
    }).then(res => {
      console.log(res, 'filter params')
      }, err=> console.log(err))


    // return undefined;
  },[propertyTypeArray])


// Starts off as closed, 
  return (<Container>
    <Form>
      <Title>Property Type</Title>
      <Option
        onChange={handleCheckboxChange}

        type='checkbox'
        value={'house'}
        name={'property_type'}
      />
      <Option
        type='checkbox'
        value={'apartment'}
        name={'property_type'}
      />
      <Option
        type='checkbox'
        value={'loft'}
        name={'property_type'}
      />
      <Option
        type='checkbox'
        value={'condominium'}
        name={'property_type'}
      />
      
    </Form>
  </Container> );
}
 
export default Filter;