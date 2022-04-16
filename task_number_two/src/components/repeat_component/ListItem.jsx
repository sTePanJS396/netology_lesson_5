import React from 'react'

const ListItem = (props) => {
    // Переиспользуемый компонент

    // Компонент еще может получать опциональные пропсы: логотипы, пути для "href" и многое другое
  return (
    <li className='list-el'><a href='/'>{props.children}</a></li>
  )
}

export default ListItem