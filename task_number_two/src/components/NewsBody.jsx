import React from 'react'
import List from './repeat_component/List'
import ListItem from './repeat_component/ListItem'

const NewsBody = ({ arr }) => {
                    //*↑ - получаю массив с новостями
  return (
    <div>
      {/*↓ - создаю список с новостями*/}
      <List>
        {arr.map((el, i) => (
          //*↓ - создаю список с новостями
          <ListItem key={i}>{el}</ListItem>
        ))}
      </List>
    </div>
  )
}

export default NewsBody