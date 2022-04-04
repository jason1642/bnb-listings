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
  BsHandThumbsUp
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
  { name: 'Elevator', icon: <BsHouseDoor /> },
  { name: 'Elevator', icon: <BsHouseDoor /> },
  
  
]

const renderIcon = (val) => {
  const obj = amenitiesCollection.find(e => e.name === val);
  return obj && obj.icon
 
}

const Container = styled.div`
  width: 58%;
  /* border: 1px solid black; */
  /* padding:  */
  margin-left: 9px;
  display: flex;
  flex-wrap: wrap;

`;
const Title = styled.div`
  width: 100%;
  /* background-color: grey; */
  /* padding: 5px 0; */
  display: flex;
  justify-content: center;
  align-items:center;
  font-weight: 300;
  font-size: 26px;
`;
const List = styled.div`
  border: 1px solid black;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  padding: 6px;
  margin: 5px;
  /* border: 1px solid black; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  & * {
    margin-right: 5px;
  }
`;
// export interface IAmenitiesProps {
// }

export function Amenities ({data}) {
  return (
    <Container>
      <Title>
        What this place has to offer
      </Title>
      {
        data && data.amenities.map(ele => 
          ele !== 'translation missing: en.hosting_amenity_50' &&  <Item>
            {data && renderIcon(ele) }{ele}
          </Item>
        )
      }
    </Container>
  );
}
