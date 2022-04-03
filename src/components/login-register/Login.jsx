import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch} from 'react-redux';
import { userActions } from '../../redux/index';




const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #807770;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  width: 70%;
  border-width: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #A38974
;
  /* border: 1px solid black; */
  padding: 50px 20px 80px 20px;
  border-radius: 10px;
`

const TextInput = styled.input`
  width: 70%;
  padding: 12px;
  margin: 12px;
  border-radius: 10px;
  border-width: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  font-size: 18px;
`
const SubmitButton = styled.input`
  font-size: 22px;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  border-width: 0px;
  width: 120px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px;
  &:hover{
    cursor: pointer;
  }
`
const Title = styled.div`
  font-size: 40px;
  margin: 10px;
  padding: 5px;
  color: white;
  font-weight: 300;
`;
const Login = () => {
  const [userInput, setUserInput] = useState({
    username: '',
    password: ''
  });

  const dispatch = useDispatch()
  const { logInUser } = bindActionCreators(userActions, dispatch);


  const handleLogin = async () =>
    await logInUser(userInput).then(userData => {
      
      console.log('success');
        return true;
  },err=>false)

  
  const handleChange = (e) => {
    setUserInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (<Container>
    <Form onSubmit={async e => {
     e.preventDefault();
      await handleLogin().then(() => {
          console.log('SUCCESS!!!')
      }, err => {
        console.log('ERROR')
     })
    }}>
      <Title>Log In</Title>
      <TextInput
        name='username'
        onChange={handleChange}
        placeholder='Username'
        type='text'
        value={userInput.username} />
      

      <TextInput
        name='password'
        onChange={handleChange}
        placeholder='Password'
        type='password'
        value={userInput.password} />
      
      <SubmitButton
        type={'submit'}
      value={'Submit'}/>
      </Form>
  </Container> );
}
 
export default Login;