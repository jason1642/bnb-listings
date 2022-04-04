import * as React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import styled from 'styled-components';

export interface ISingleReviewProps {
}


const styles = {
  reviewerPhoto: {
    height: '60px',
    width: '50px',
    marginRight: '7px'
  }
}

const Container = styled.div`
  border: 1px solid black;
  width:40% ;
  margin: 10px 0;
  padding: 10px;
`;
const Name = styled.div`
  font-size: 20px;
`;

const Body = styled.div`
  
`;
const Header = styled.div`
  display: flex;
  background-color: grey;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export function SingleReview ({data}) {
  const { reviewer_name, comments, date } = data;
  
  return (<Container>
    <Header>
      <BsPersonCircle
        style={styles.reviewerPhoto} />
      <Name>{reviewer_name}</Name>
    </Header>
    <Body>
    {comments}
    </Body>

  </Container>
  );
}
