import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageContainer from './ImageContainer.tsx';
import InfoContainer from './InfoContainer.tsx';
import Modal from 'react-modal';
import SeeMoreModal  from './SeeMoreModal.tsx';

const Container = styled.div`
  width: 95%;
  min-height: 70vh;
  display: flex;
  padding-top: 20px;
 
`;





const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const IntroSection = ({ data }) => {
  

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

  return (<Container>
    
    <ImageContainer
      data={data} />

    <InfoContainer openModal={openModal} data={data} />

    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <SeeMoreModal
        data={data}
        closeModal={closeModal}
      />
      </Modal>

  </Container> );
}
 
export default IntroSection;