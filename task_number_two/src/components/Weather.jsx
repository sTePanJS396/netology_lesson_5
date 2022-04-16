import React from 'react'

const Weather = (props) => {
  return (
    <div className='weather'>
        <h5>Погода в {props.city}</h5>
        {props.children}
    </div>
  )
}

export default Weather