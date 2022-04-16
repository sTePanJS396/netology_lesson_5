import React from 'react'

const CardWrapper = (props) => {
  return (
    <div className='card' style={{width: '18rem'}}>
        {props.children}
    </div>
  )
}

export default CardWrapper