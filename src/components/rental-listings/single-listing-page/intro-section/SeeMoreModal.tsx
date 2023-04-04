import * as React from 'react';
// import { useState, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 60vw;

`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 300;
  padding: 3px;
  padding-left: 0px;
`;

const Content = styled.div`
  font-weight: 300;
  font-size: 11px;
  line-height: 23px;
`;
const Wrapper = styled.div`

`

export interface ISeeMoreModalProps {
}

const SeeMoreModal: React.FunctionComponent<{closeModal: Function, data: any}> = ({ closeModal, data}) => {
  return (<Container>

    <Wrapper>
    <Title style={{fontSize: '30px'}}>About this space</Title>
      <Content>
        {data.summary}
    </Content>
    </Wrapper>
    <Wrapper>
    <Title>The space</Title>
    <Content>{data.space}</Content>
    </Wrapper>
    <Wrapper>
    <Title>Guest access</Title>
      <Content>
        {data.access}
      </Content>
      </Wrapper>
        {/* <button onClick={closeModal}>close</button> */}
       
  </Container>
  );
}

export default SeeMoreModal;