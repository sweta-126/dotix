import React, { useState } from 'react'
import ArrowButton from '../components/ArrowButton'
import "./Home.css"
import {BsFillRocketTakeoffFill} from "react-icons/bs"
import {GiStoneTower} from "react-icons/gi"
import {MdSportsBaseball} from "react-icons/md"
import { Link } from 'react-router-dom'

const Home = ({userName}) => {

  return (
    <div>
    <div className='home-top'>
       <div className="h-top">
        <ArrowButton />
        <div className="h-name">Hello {userName}</div>
        <img src="/assets/img.jpeg" alt="" className="h-img" />
       </div>
       <div className="h-popular">
        <span className='h-tag'>Popular</span>
       <div className="populars">
        <Link to="/quiz/22" style={{textDecoration:"none", color:'inherit'}} >
          <div className="popular">
            <span>Space</span>
            <BsFillRocketTakeoffFill className='icon' />
          </div>
          </Link>
          <Link to="/quiz/23" style={{textDecoration:"none", color:'inherit'}} >
          <div className="popular">
            <span>History</span>
            <GiStoneTower className='icon'  />
          </div>
          </Link>
          <Link to="/quiz/21" style={{textDecoration:"none", color:'inherit'}} >
          <div className="popular">
            <span>Sports</span>
            <MdSportsBaseball className='icon'  />
          </div>
          </Link>
       </div>
       </div>
    </div>
    <div className="h-categories">
        <span className='h-explore'>Explore</span>
        <span className='h-view'>View All</span>
       <div className="h-category-list">
          <div className="h-category">
            <span>Space</span>
            <BsFillRocketTakeoffFill className='icon' />
          </div>
          <div className="h-category">
            <span>History</span>
            <GiStoneTower className='icon'  />
          </div>
          <div className="h-category">
            <span>Sports</span>
            <MdSportsBaseball className='icon'  />
          </div>
          <div className="h-category">
            <span>Space</span>
            <BsFillRocketTakeoffFill className='icon' />
          </div>
          <div className="h-category">
            <span>History</span>
            <GiStoneTower className='icon'  />
          </div>
          <div className="h-category">
            <span>Sports</span>
            <MdSportsBaseball className='icon'  />
          </div>
          <div className="h-category">
            <span>Space</span>
            <BsFillRocketTakeoffFill className='icon' />
          </div>
          <div className="h-category">
            <span>History</span>
            <GiStoneTower className='icon'  />
          </div>
          <div className="h-category">
            <span>Sports</span>
            <MdSportsBaseball className='icon'  />
          </div>
          <div className="h-category">
            <span>Space</span>
            <BsFillRocketTakeoffFill className='icon' />
          </div>
          <div className="h-category">
            <span>History</span>
            <GiStoneTower className='icon'  />
          </div>
          <div className="h-category">
            <span>Sports</span>
            <MdSportsBaseball className='icon'  />
          </div>
          <div className="h-category">
            <span>Space</span>
            <BsFillRocketTakeoffFill className='icon' />
          </div>
          <div className="h-category">
            <span>History</span>
            <GiStoneTower className='icon'  />
          </div>
          <div className="h-category">
            <span>Sports</span>
            <MdSportsBaseball className='icon'  />
          </div>
          <div className="h-category">
            <span>Space</span>
            <BsFillRocketTakeoffFill className='icon' />
          </div>
          <div className="h-category">
            <span>History</span>
            <GiStoneTower className='icon'  />
          </div>
          <div className="h-category">
            <span>Sports</span>
            <MdSportsBaseball className='icon'  />
          </div>
       </div>
       </div>
    </div>
  )
}

export default Home