import { useState } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux'
import { useDispatch} from 'react-redux';
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
    /* width: 100%; */
    padding-top: 100px;
    align-items: flex-start;
  }
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
  @media (max-width: 480px) {
    width: 95%;
    /* height: 80vh; */
    justify-content: flex-start;
  }
`

const TextInput = styled.input`
  width: 70%;
  padding: 12px;
  margin: 14px 0 ;
  border-radius: 10px;
  border-width: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  font-size: 18px;
  @media (max-width: 480px) {
    width: 95%;
    /* height: 80vh; */
  }
`
const SubmitButton = styled.input`
  font-size: 22px;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  border-width: 0px;
  width: 150px;

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

  const navigate = useNavigate()
  const [userInput, setUserInput] = useState({
    username: '',
    password: ''
  });

  const dispatch = useDispatch()
  const { logInUser } = bindActionCreators(userActions, dispatch);


  const handleLogin = async () => {
    let timerInterval

    await logInUser(userInput).then(userData => {
      Swal.fire({
        title: 'Successfully logged in!',
        html: '...redirecting you to the Home page now',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          navigate("/");
          window.location.reload()
          // console.log('I was closed by the timer')
        }
      }, err => console.log(err))
      console.log('success');
    
    })
  }
  
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