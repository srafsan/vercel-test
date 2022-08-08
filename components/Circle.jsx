import React from 'react'


const Circle = ({ top, left, right, backgroundColor }) => {
  return (
    <div className='circle' style={{ top, left, right, backgroundColor }}></div>
  )
}

export default Circle