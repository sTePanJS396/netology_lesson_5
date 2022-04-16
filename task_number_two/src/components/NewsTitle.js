import React from 'react'
import List from './repeat_component/List'
import ListItem from './repeat_component/ListItem'

const NewsTitle = ({ arr }) => {
                  //*↑ - получаю массив со странами
  return (
    <div className='news-title'>
      {/*↓ - создаю список со странами*/}
      <List>
          {arr.map((el, i) => (
                //*↓ - создаю список со странами
              <ListItem key={i}>{el}</ListItem>
          ))}
      </List>
    </div>
  )
}

export default NewsTitle