import React from 'react'

import './Info.css'
// import Mock from '../services/Mock.json'
function Info(props) {
  return (
    <>
    <div className='container'>

            <img src={props.Photo} className='ihj' style={{height:'500px', width:"550px"}} alt="err" />
               <h4> {props.name}</h4>
               <p>{props.artist}</p>
    </div>
    </>
  )
}

export default Info