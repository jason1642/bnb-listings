import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
  /* width: 80%; */
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
width: 75%;
border-radius: 15px;
`
const Text = styled.div`
  position: absolute;
  font-size: 35px;
  color: black;
  padding: 15px;
  background-color: #ccc4c4a7;
  /* bottom: 0px; */
  `


const LoginPromo = () => {
  return (<Container>

    <Image src={"https://images.unsplash.com/photo-1647425104126-746cd22ddde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"} /> 
    <Text>Don't have an account? Sign up today!</Text>  
  </Container> );
}
 
export default LoginPromo;