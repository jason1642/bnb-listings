import * as React from 'react';
import styled from 'styled-components';

interface AnyObject { [key: string]: any };


const Container = styled.div`
  height: 100%;
`;
const Item = styled.div`
  
`;

export function Nav({currentUser}:AnyObject) {
  
// Side bar with - my details, favorites, preferences?
  return (
    <Container>
      
      <Item>Account Details</Item>
      <Item>My Favorites</Item>
      {/* <Item></Item> */}
   </Container>
  );
}
