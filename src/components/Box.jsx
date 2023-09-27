import React from 'react'
import "./Box.css"

const Box = ({id,name,img,point}) => {
  return (
    <div className='box'>
        <div className="no">0{id}</div>
        <img src={img} alt="" className="image" />
        <div className="b-name">{name} </div>
        <div className="b-point">{point}pt</div>
    </div>
  )
}

export default Box