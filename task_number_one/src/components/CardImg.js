import React from 'react';

const CardImg = ({ alt, src }) => {
  return (
    <img className='card-img-top' alt={alt} src={src}/>
  )
}

export default CardImg