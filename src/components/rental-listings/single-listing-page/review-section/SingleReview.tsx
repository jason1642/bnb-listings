import { BsPersonCircle } from 'react-icons/bs';
import styled from 'styled-components';
import { format } from 'fecha';
import { parse } from 'fecha';

const styles = {
  reviewerPhoto: {
    height: '60px',
    width: '50px',
    marginRight: '7px',
    color: '#4d80e7'
  }
}

const Container = styled.div`
  /* border: 1px solid black; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.135), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  width:40% ;
  margin: 10px 0;
  margin-right: auto;
  /* padding: 6px; */
  /* height: 220px; */
  /* overflow-y: scroll; */
  min-height:240px ;
  text-align: left;
  border-radius: 15px;
  max-height: 300px;
  @media (max-width: 480px){
    width: 95%;
    min-height:160px ;
    height: auto;
  }
`;
const Name = styled.div`
  font-size: 20px;
`;

const Body = styled.div`
  display: flex;

  padding: 10px;
  font-size: 1.2rem;
  line-height: 2rem;
  overflow-y: auto;

  @media (max-width: 480px){
    overflow: scroll;
    height: 70%;
  }
`;
const Header = styled.div`
  display: flex;
  padding-left: 5px;
  /* background-color: #4d80e7; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 480px){
    /* height: 25%; */
  }
`;
const DateCreated = styled.div`
  /* padding: 5px 10px; */
  /* border: 1px solid black; */
  font-size: 13px;
  color: #605f5f;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SingleReview: React.FunctionComponent<{data: any}> = ({ data }) => {
  

  const { reviewer_name, comments, date } = data;


  // format(Date<Date>(date), 'hh:mma')
  // console.log(format(new Date(date), 'shortTime'))

  return (<Container>
    <Header>
      <BsPersonCircle
        style={styles.reviewerPhoto} />
      <TextContainer>
      <Name>{reviewer_name}</Name>
      <DateCreated>
        {
          
          format(new Date(parse(date, 'isoDateTime')!), 'MMM: YYYY')}
      </DateCreated>
      </TextContainer>
    </Header>
    <Body>
    {comments}
    </Body>

  </Container>
  );
}

export default SingleReview