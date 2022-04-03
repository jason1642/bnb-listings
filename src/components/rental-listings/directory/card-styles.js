import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 260px;
  flex-direction: column;
  margin: 5px;

  @media (min-width: 1000px) {
    width: 260px;
  }
`;
export const Image = styled.img`
  height: 100%;
  border-radius: 10px;
  width: 100%;
  /* vertical-align: middle; */
  object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
  object-position: center;
  position: absolute; /* Take your picture out of the flow */

`
export const ImageContainer = styled.div`
  margin-bottom: 5px;
  /* height: 100px; */
  position: relative;
  display: flex;
  width: 100%;
  &:after{
    display: block;
    padding-bottom: 100%;
    content: "";
  }
`
export const Title = styled.div`
  
`;
export const Name = styled.div`
  font-weight: 600;
  text-align: left;
  margin-left: 10px;
  max-width: 70%;
`

export const Price = styled.div`
    text-align: left;
    margin-left: 10px;

`;
export const InfoContainer = styled.div`
  height: 20%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  font-size: .2em;
  /* line-height: 20px; */
`

export const RowOne = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  /* font-size: 12px; */
  /* flex-direction: column; */

  /* border: 1px solid black; */
`;
export const PropertyType = styled.div`
  margin-right: 10px;
`;

export const RowTwo = styled.div`
    width: 100%;
    /* padding: 0 10px; */
    /* font-size: 14px; */
    display: flex;
    justify-content: space-between;
    /* flex-direction: row; */
    /* border: 1px solid black; */


`;
export const Country = styled.div`
    margin-right: 10px;
    text-align: right;

`;

export const FavButton = styled.div``