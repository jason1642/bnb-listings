import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import IntroSection from './intro-section/IntroSection';
import SecondSection from './second-section/SecondSection';
import ReviewSection from './review-section/ReviewSection';
import { addFavorite } from '../../../services/api-helpers';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import Swal  from'sweetalert2'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://bnb-listings-production.up.railway.app' : 'http://localhost:5050';

interface IComponentProps { 
  currentUser: any;
}

console.log(baseUrl)
const Container = styled.div`
  padding-top: 40px;
  display: flex;
  background-color: #d0c6bb;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  &  * {
    /* width: 100%; */
  }
`;

const FavoriteButton = styled.button`
  color: black;
  /* border-radius: 13px; */
  border-width: 0px;
  background-color: transparent;
  /* padding: 4px 10px; */
  width: 180px;
  
`
const Wrapper = styled.div`
   color: black;
  border-radius: 13px;
  border-width: 0px;
  margin-left: 180px;
  align-self: flex-start;
  background-color: #7dfb61;
  padding: 4px 10px;
  &:hover{
    cursor: pointer;
    background-color: #99fb61a5;
  }
`;

// typescript method returns object

class Options {
  _id: string;
  method: string;
  baseURL: string;
  constructor(_id: string) {
    this._id = _id;
    this.method = 'get';
    this.baseURL = baseUrl + '/api/airbnb/listings/rooms/' + this._id;
  }
}

const SingleListingPage:  React.FunctionComponent<IComponentProps>= ({currentUser}) => {
  const { _id } = useParams();
  const newOptions: {
  } = new Options(_id!)
  const [listingData, setListingData] = useState<any>();
  const [isFavorited, setIsFavorited] = useState<Boolean>(false);
  useEffect(() => {
    // console.log(_id)
    console.log(currentUser)

    axios(newOptions).then(res => {
      setListingData(res.data);
      console.log(res)
    }, err=> console.log(err))

  }, [currentUser])


  useEffect(() => {
    // console.log(currentUser)
    const isInFavorites = (listingData && currentUser.authenticated === true) ? currentUser.favorites.findIndex((ele: string) => ele === listingData._id) : -1
    console.log(isInFavorites)
    isInFavorites !== -1 && setIsFavorited(true);
    // console.log(listingData)
  }, [currentUser, listingData]);


  type HandleFavType = () => any

  const handleAddFavorite: HandleFavType = async() => {
    await addFavorite(currentUser._id, _id!).then((res: string) => {
      // console.log(res)
      let timerInterval: any
      res === 'added' ? setIsFavorited(false) : setIsFavorited(true);
              return res === 'added'?  Swal.fire({
                title: 'Added to favorites!',
                icon: 'success',
            timer: 1000,
            didOpen: () => {
              Swal.showLoading()
              const b: any = Swal.getHtmlContainer()?.querySelector('b')
              timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)},
            willClose: () => {clearInterval(timerInterval)}
              })
                :
                Swal.fire({
                  title: 'Removed from favorites!',
                  icon: 'error',
                  timer: 1000,
                  didOpen: () => {
                 
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                    })
                
            }, err => {
              console.log(err)
            })
  }
  // introsection has two sides/components
  return (<Container>
    {listingData && <>
      <IntroSection
        data={listingData} />
    
      {currentUser.authenticated &&
        <Wrapper>{isFavorited ?  <BsHeartFill style={{ color: 'red' }} /> : <BsHeart style={{ color: 'red' }} />}
          
        <FavoriteButton onClick={handleAddFavorite}>
            {isFavorited ? 'Remove from' : 'Add to'} favorites
          </FavoriteButton></Wrapper>
      }
    <SecondSection data={listingData} />

    <ReviewSection data={listingData} /></>}
  </Container> );
}
 
export default SingleListingPage;