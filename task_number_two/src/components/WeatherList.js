import React from 'react'
import List from './repeat_component/List'
import ListItem from './repeat_component/ListItem'

const WeatherList = ({ arr }) => {
  return (
   <List>
       {arr.map((el, i) => (
           <ListItem key={i}>{el}</ListItem>
       ))}
   </List>
  )
}

export default WeatherList