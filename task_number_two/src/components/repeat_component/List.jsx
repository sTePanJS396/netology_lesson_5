import React from 'react'

const List = (props) => {
    // Переиспользуемый компонент
  return (
    <ul className='list'>{props.children}</ul>
  )
}

export default List