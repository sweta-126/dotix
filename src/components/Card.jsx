import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div className="c-container">
            <div className="c-card left">
                <div className="card-img">
                    <img src="/assets/img.jpeg" alt="" />
                </div>
                <div className="card-content">
                    <div className="rank">2</div>
                    <div className="point">442pt</div>
                </div>
            </div>
            <div className="c-card  ">
                <div className="card-img">
                    <img src="/assets/img.jpeg" alt="" />
                </div>
                <div className="card-content middle">
                    <div className="rank">1</div>
                    <div className="point">453pt</div>
                </div>
            </div>
            <div className="c-card  right">
                <div className="card-img">
                    <img src="/assets/img.jpeg" alt="" />
                </div>
                <div className="card-content">
                    <div className="rank">3</div>
                    <div className="point">433pt</div>
                </div>
            </div>
    </div>
  )
}

export default Card