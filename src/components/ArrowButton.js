import React from 'react';
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import "./ArrowButton.css"

const ArrowButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack} className='arrow'>
      <AiOutlineArrowLeft />
    </button>
  );
};

export default ArrowButton;
