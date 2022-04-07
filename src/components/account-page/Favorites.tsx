import * as React from 'react';
import styled from 'styled-components';
interface IFavoritesProps {

}
interface AnyObject { [key: string]: any };

const Container = styled.div`
  
`;
// Create api to fetch array full of data rather than references

const Favorites: React.FunctionComponent<IFavoritesProps> = ({currentUser}:AnyObject) => {
  return (
    <Container>
      
      {
        // currentUser.favorites.map((ele) => {
        //   e
        // })
      }
    </Container>
  );
};

export default Favorites;
