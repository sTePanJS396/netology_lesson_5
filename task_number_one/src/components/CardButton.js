import React from 'react'

const CardButton = (props) => {
  return (
    <a className='btn btn-primary' href={props.url}>{props.children}</a>
  )
}

export default CardButton