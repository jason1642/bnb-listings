import styled from 'styled-components';
import * as React from 'react';
import { useState, useEffect } from 'react';
import {handleChangePassword} from '../../services/api-helpers.ts'
interface IChangePasswordProps {
}


const Container = styled.form`
  border: 1px solid darkgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 13px;
  
`;
const Input = styled.input`
  margin: 10px 0;
  width: 95%;
`
const SubmitButton = styled.input`
  width: 45%;
  margin-top: 10px;
  border-radius: 8px;
  font-size: 16px;
  border-width: 0px;
  background-color: #65e365;
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 45%;
  margin-top: 25px;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  border: 0px solid black;
  padding: 2px;
  background-color: grey;
  &:hover{
    cursor: pointer;

  }
`;
const Span = styled.div`
  
`;
const ChangePassword = ({handleClose, toggleChange}) => {
  
  const [userInput, setUserInput] = useState({
    old_password: '',
    new_password: ''
  });
  const [formMessage, setFormMessage] = useState<string>('');
  const handleSubmit = (e) => {
    e.preventDefault()
    handleChangePassword(userInput).then((res) => {
      if (res) {
        setUserInput({
          old_password: '',
          new_password: ''
        })
        setFormMessage('Password Changed!')
      } else {
        setFormMessage('Incorrect information, please try again.')
      }
      
    },err=>console.log(err))
  }
  const handleChange = (e) => {
    const inputName = e.target.name;
    setUserInput(prev => ({ ...prev, [inputName]: e.target.value }))
    
  }
  useEffect(() => {
    // console.log(userInput)
  }, [userInput]);
  return (
    <Container
      style={{
        display: toggleChange ? 'flex' : 'none'
      }}
      onSubmit={handleSubmit}>

      <Input
        type='password'
        name='old_password'
        placeholder='Old password'
        value={userInput.old_password}
        onChange={handleChange}
      />
      <Input
        type='password'
        name='new_password'
        placeholder='New password'
        value={userInput.new_password}
        onChange={handleChange}
      />
      <Span>
        {formMessage}
      </Span>
      <SubmitButton
        type='submit' />
      <Button
        onClick={handleClose}
      >
      Cancel
      </Button>
    </Container>
  );
};

export default ChangePassword;
