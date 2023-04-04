import * as React from 'react';
import styled from 'styled-components';
import {
  BsFillCameraVideoFill,
  BsFillTvFill,
  BsTv,
  BsGlobe,
  BsWifi,
  BsWater,
  BsDropletFill,
  BsConeStriped,
  BsCupStraw,
  BsFillTagFill,
  BsSnow3,
  BsFillBrightnessHighFill,
  BsDropletHalf,
  BsTruckFlatbed,
  BsFillPlugFill,
  BsFillCartPlusFill,
  BsFillUmbrellaFill,
  BsSunrise,
  BsHouseDoor,
  BsLaptop,
  BsMicFill,
  BsHeart,
  // BsHandThumbsUp
} from 'react-icons/bs';
const amenitiesCollection = [
  {name: 'Security cameras on property', icon: <BsFillCameraVideoFill />},
  { name: 'TV', icon: <BsFillTvFill /> },
  { name: 'Cable TV', icon: <BsTv /> },
  {name: 'Internet', icon: <BsGlobe />},
  {name: 'Wifi', icon: <BsWifi />},
  {name: 'Pool', icon: <BsWater />},
  {name: 'Kitchen', icon: <BsCupStraw />},
  {name: 'Free parking on premises', icon:<BsConeStriped />},
  {name: 'Dog(s)', icon: <BsFillTagFill />},
  {name: 'Heating', icon: <BsFillBrightnessHighFill />},
  {name: 'Washer', icon: <BsDropletHalf />},
  {name: 'First aid kit', icon: <BsFillCartPlusFill />},
  {name: 'Essentials', icon: <BsFillPlugFill />},
  {name: 'Shampoo', icon: <BsDropletHalf />},
  {name: 'Hangers', icon: <BsFillUmbrellaFill />},
  {name: 'Hair dryer', icon: <BsFillBrightnessHighFill />},
  {name: 'Iron', icon: <BsFillPlugFill />},
  {name: 'Hot water', icon: <BsDropletFill />},
  {name: 'Bed linens', icon: <BsTruckFlatbed />},
  {name: 'Extra pillows and blankets', icon: <BsTruckFlatbed />},
  { name: 'Ethernet', icon: <BsGlobe /> },
  { name: 'Air conditioning', icon: <BsSnow3 /> },
  {name: 'Buzzer/wireless intercom',  icon: <BsMicFill/>},
  {name: '24-hour check-in',  icon: <BsSunrise />},
  {name: 'Laptop friendly workspace',  icon: <BsLaptop />},
  { name: 'Family/kid friendly', icon: <BsHeart /> },
  { name: 'Smoking allowed', icon: <BsHouseDoor /> },
  { name: 'Elevator', icon: <BsHouseDoor /> },
  
  
]

interface IAmenitiesPropTypes {
  data: any;
}
const renderIcon = (val: any) => {
  const obj = amenitiesCollection.find(e => e.name === val);
  return obj && obj.icon
 
}

const Container = styled.div`
  width: 50%;
  /* border: 1px solid black; */
  /* padding:  */
  margin-left: 9px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 480px){
    width: 95%;
  }
`;
const Title = styled.div`
  width: 100%;
  /* background-color: grey; */
  /* padding: 5px 0; */
  
  display: flex;
  justify-content: center;
  align-items:center;
  font-weight: 300;
  font-size: 2.5em;
`;
const ItemContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  /* justify-content: space-evenly; */
  /* align-items: flex-start; */
  
  flex-wrap: wrap;
  @media (max-width: 480px){
    padding-bottom: 14px;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  padding: 6px;
  margin: 5px;
  width: 30%;
  max-height: 50px;
  font-size: 1.4em;
  font-weight: 300;
  text-align: left;
  justify-content: flex-start;
  & * {
    margin-right: 5px;
  }
  @media (max-width: 480px){
    width: auto;
  }
`;


const Amenities: React.FunctionComponent<IAmenitiesPropTypes> = ({data}) =>{
  return (
    <Container>
      <Title>
       Amenities
    </Title>
      <ItemContainer>
      {data && data.amenities.length > 1 ? 
      
      
        data && data.amenities.map((ele: any) => 
          ele !== 'translation missing: en.hosting_amenity_50' &&  <Item key={ele.name}>
            {data && renderIcon(ele) }<span style={{color: 'black',}}>{ele}</span>
          </Item>
        )
      
        : <Item style={{alignSelf:'center', margin: '0 auto', boxShadow: 'none'}}>No amenities lists</Item>
    }</ItemContainer>
    </Container>
  );
}

export default Amenities;