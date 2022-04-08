import * as React from 'react';
import styled from 'styled-components';
import Card from '../rental-listings/directory/Card'
import { useOutletContext } from "react-router-dom";



interface IFavoritesProps {

}
interface AnyObject { [key: string]: any };

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 70vh;
  /* padding: 15px; */
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 300;
  /* background-color: green; */
  font-size: 30px;
  @media (max-width: 480px){
    margin: 10px 0;
  }
`;
const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 480px){
    justify-content: center;
  }
`
// Create api to fetch array full of data rather than references
// declare function useOutletContext<
//   Context = any
// >(): Context;
const Favorites: React.FunctionComponent<IFavoritesProps> = () => {
  
  const [favoritesListData, currentUser] = useOutletContext()
  console.log(favoritesListData)
   return (
    <Container>
      
       <Title>Your favorites</Title>
       <CardWrapper>
      {
        favoritesListData.map((data, i)=><Card styles={{margin: '0'}} key={i} data={data} />)
       }
       </CardWrapper>
    </Container>
  );
};

export default Favorites;
