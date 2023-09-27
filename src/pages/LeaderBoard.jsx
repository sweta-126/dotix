import React from 'react'
import "./LeaderBoard.css"
import ArrowButton from '../components/ArrowButton'
import data from '../Data'
import Card from '../components/Card'
import Box from '../components/Box'

const LeaderBoard = () => {

  return (
    <div>
      <div className='leader'>
      <div className="l-top">
        <ArrowButton />
        <img src="/assets/img.jpeg" alt="" className="l-img" />
       </div>
       <ul className="l-heading">
          <li style={{fontWeight:800}}>Today</li>
          <li>Month</li>
          <li>All Times</li>
       </ul>
       <div className='l-card-container'>
        <Card/>
        </div>
       </div>
       <div className="leader-bottom">
       {data.map((item) => (
         <li key={item.id}><Box id={item.id} name={item.name} point={item.point} img={item.img} /></li>
       ))}
       </div>
    </div>
  )
}

export default LeaderBoard