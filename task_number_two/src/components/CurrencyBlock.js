import React from 'react'
import List from './repeat_component/List'
import ListItem from './repeat_component/ListItem'

const CurrencyBlock = ({ arr }) => {
                          //*↑ - получаю массив с валютой
  return (
    //↓ - создаю список с валютой
    <List>
        {arr.map((el, i) => (
              //*↓ - создаю список с валютой
            <ListItem key={i}>{el}</ListItem>
        ))}
    </List>
  )
}

export default CurrencyBlock