import React, { useRef } from 'react'
import "./Start.css"
import { Link } from 'react-router-dom';

const Start = ({setUserName}) => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value);
    }
  return (
    <div className='start'>
        <h3>Welcome to</h3>
        <h1>QUIZ MASTER</h1>
        <h3> Challenge Your Knowledge</h3>
        <p>Are you ready to test your intellect and discover the depths of your knowledge ? Look no further ! QuizMaster is here to provide you with a thrilling and educational experience like no other.</p>
        <input placeholder='Enter your name:' className='startInput' ref={inputRef}/>
        <Link to="/home">
        <button className='startButton' onClick={handleClick}>Start</button>
        </Link>
    </div>
  )
}

export default Start;