import React from 'react'
import './ContentHeading.css'

function ContentHeading(props) {
  return (
    <div className='heading'>{props.heading}</div>
  )
}

export default ContentHeading;