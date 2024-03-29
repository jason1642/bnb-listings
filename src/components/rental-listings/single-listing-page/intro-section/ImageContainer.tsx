import styled from 'styled-components';




const Container = styled.div`
  /* width: 50%;
  border: 1px solid black;
  height: 100%;
  background-color: cyan; */
  margin: 0 auto;
  margin-top: 0px;
  height: 80%;

  position: relative;
  display: flex;
  width: 40%;
  
  &:after{
    display: block;
    padding-bottom: 100%;
    content: "";
  }
  @media (max-width: 480px){
    width: 95%;
  }
`

const Image = styled.img`

    height: 100%;
  border-radius: 10px;
  width: 100%;
  /* vertical-align: middle; */
  object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
  object-position: center;
  position: absolute; /* Take your picture out of the flow */
`;


const ImageContainer: React.FunctionComponent<{data: any}> = ({data}) => {
  return (
    <Container>
      <Image
        src={data.images.picture_url} />
 
    </Container>
  )
};

export default ImageContainer;
