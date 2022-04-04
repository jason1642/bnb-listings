import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { BsFillStarFill } from 'react-icons/bs';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import { SingleReview } from './SingleReview.tsx';


const Container = styled.div`
  min-height: 70vh;
  display: flex;
  /* justify-content: center; */
  flex-direction:column ;
  align-items: flex-start;
  border: 1px solid black;
  width: 90%;
`;
interface IReviewSectionProps {
}
const Title = styled.div`
  border: 1px solid black;
  width: 100%;
  text-align: left;
  padding: 15px;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* flex-direction:column ; */
`;
const StatsTable = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border: 1px solid black;

`
const ReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Item = styled.div`
  padding: 5px;
  /* height: 30px; */
  min-width: 240px;
  display: flex;
  /* width: 46%; */
  text-align: left;
  justify-content: flex-end;
  align-items: center;
  margin: 0px;
`;
const Label = styled.div`
  font-size: 10px;
  text-align: left;
  margin: 0 5px;
  /* width: 100px; */
  overflow: hidden;
`;

const ReviewSection = ({ data }) => {
  const { reviews, review_scores } = data;
  console.log(review_scores)
  useEffect(() => { 
    
  },[])
  return (
    <Container>
      <Title><BsFillStarFill style={{marginRight:'4px'}} /> {review_scores.review_scores_rating} | {reviews.length} Reviews</Title>
      <StatsTable>

        {Object.keys(review_scores).map((ele, i) =>
          review_scores[ele] < 14 && <Item key={i}>
            <Label>{_.capitalize(ele.split('_')[2])}</Label>

            <ProgressBar
              style={{ height: '8px', width: '50%', border: '1px solid black', backgroundColor: 'orange' }}
              variant='info'
              now={review_scores[ele] * 10} />
           <Label> {review_scores[ele]}</Label>
          </Item>)}
        

 
      </StatsTable>
<ReviewContainer>
        {reviews.map((e, i) => 
            <SingleReview
              key={i}
              data={e}
          />)}

      </ReviewContainer>
    </Container>
  );
};

export default ReviewSection;
