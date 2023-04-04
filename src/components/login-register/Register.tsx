import { useState } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/index';
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #807770;
  @media (max-width: 480px) {
    
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  border-width: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #A38974;
  padding: 50px 20px 80px 20px;
  border-radius: 10px;
  @media (max-width: 480px) {
    width: 95%;

  }
`

const TextInput = styled.input`
  width: 70%;
  padding: 12px;
  margin: 12px;
  border-radius: 10px;
  border-width: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 18px;
  @media (max-width: 480px) {
   width: 100%; 
  }
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
  @media (max-width: 480px) {
    width: 155px;
  }
`
const Title = styled.div`
  font-size: 40px;
  margin: 10px;
  padding: 5px;
  color: white;
  font-weight: 300;
`;

const Register = () => {
  const [userInput, setUserInput] = useState({
    username: '',
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const { registerUser }: {registerUser: any} = bindActionCreators(userActions, dispatch);
  const navigate = useNavigate()


  const handleChange = (e: any) => {
    setUserInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let timerInterval: any

    await registerUser(userInput).then((res: any) => {
      Swal.fire({
        title: 'Successfully created account!!',
        html: '...redirecting you to the Log In page now',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
          // Swal.showLoading()
          // const b = Swal.getHtmlContainer()?.querySelector('b')
          // timerInterval = setInterval(() => {
          //   b.textContent = Swal.getTimerLeft()
          // }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          navigate("/login");
          console.log('I was closed by the timer')
        }
      })
     
    },(err: any)=>console.log('register error', err))

  }

  return (<Container>
    <Form onSubmit={handleSubmit}>

      <Title>Register</Title>
      <TextInput
        name='username'
        onChange={handleChange}
        placeholder='Username'
        type='text'
        value={userInput.username} />
         <TextInput
        name='email'
        onChange={handleChange}
        placeholder='Email Address'
        type='email'
        value={userInput.email} />
      <TextInput
        name='password'
        onChange={handleChange}
        placeholder='Password'
        type='password'
        value={userInput.password} />
      
      <SubmitButton
        type='submit'
      value={'Submit'}/>
      </Form>
  </Container>);
  
}

 
export default Register;