import React from 'react'
import Card from '../card-componet/Card'
import "./CardList.css"

const CardList = ({monsters}) => {
  return (
    <div className='card-list'>
      {
        monsters.map(monster => monster && (<Card key={monster.id} monster={ monster }/>))
      }
    </div>
  )
}

export default CardList
