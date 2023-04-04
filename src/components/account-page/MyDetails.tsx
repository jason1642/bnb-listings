import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useOutletContext } from "react-router-dom";
// import { Link } from 'react-router-dom';
import moment from 'moment';
import ChangePassword from './ChangePassword';

interface IMyDetailsProps {
}

const Container = styled.div`
  /* border: 1px solid black; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #836e65c3;

  min-height: 86vh;
  padding: 15px;
  width: 100%;
`;
const Title = styled.div`
  font-size: 1.8em;
  font-weight: 300;
`;
const Main = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  height: 80%;
  @media (max-width: 480px){
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
  }

`;
// declare interface UserObject {

//     username: string,
//     _id: string,
//     email: string,
//     favorites: [string],
//     authenticated: Boolean
  
// }
const SideOne = styled.div`
  width: 40%;
  padding: 15px;
  /* background-color: #aaaaff; */
  font-size: 15px;
  font-weight: 300;
  @media (max-width: 480px){
    width: 95%;
  }
`;
const SideTwo = styled.div`
  /* background-color: #a1f4a1; */
  width: 100%;
  padding: 15px;
  /* height: 100%; */
  font-size: 13px;
`;
// declare function useOutletContext<
//   Context = any
// >(): Context;
const Item = styled.div`
  line-height: 26px;
  font-size: 17px;
  margin: 5px 0;
`;
const Button = styled.button`
  /* display: flex; */
  border-width: 0px;
  width: auto;
  color: black;
  /* margin-top: 55px; */
  text-decoration: none;
  border-radius: 14px;
  color: white;
  background-color: #4d93ef;
  padding: 5px 10px;
  &:hover{
    color: black;
  }
`;
const Info = styled.div`
  font-size: 12px;
`;
const Image = styled.img`
  width: 100%;
`;

const MyDetails: React.FunctionComponent<IMyDetailsProps> = () => {
  const [ currentUser]: any = useOutletContext();
  const [toggleChange, setToggleChange] = useState<boolean>(false)
  // console.log(currentUser)
  // User has # of favorites, date created, username change, password change, email change
  const handleClose = () => {
    setToggleChange(false)
    console.log('closing')
  }
  return (
    <Container>
      <Title>Account Details</Title>
      



      <Main>  
        <SideOne>

          <Image 
          src="https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0=" 
          alt='user account avatar placeholder'/>
          <Info>
            Assertively utilize adaptive customer service for future-proof platforms. Completely drive optimal markets.
          </Info>
      </SideOne>
        <SideTwo>
          <Item><b>Username: </b>{currentUser.username}</Item>
          <Item><b>Email: </b>{currentUser.email}</Item>
          <Item><b>Joined: </b>{moment(currentUser.created_at).format('MMMM Do YYYY, h:mm:ss a')}</Item> 



          <div style={{ marginTop: '20px' }}>
            <Button
              style={{
                display: toggleChange ? 'none' : 'flex'
              }}
              onClick={()=>setToggleChange(true)}
              >Change Password</Button></div>
          <ChangePassword
            style={{
              display: toggleChange ? 'flex' : 'none'
            }}
            toggleChange={toggleChange}
            handleClose={handleClose}
          />
       
       
        </SideTwo>
      </Main>
    </Container>
  );
};

export default MyDetails;
