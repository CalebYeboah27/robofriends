import React from 'react'

import Card from './Card'
import './CardList.css'

const CardList = ({ robots }) => {
  console.log("CardList")
  return (
    <div className="card-list">
      {robots.map(robot => {
        const { id, name, email } = robot

        return <Card key={id} name={name} email={email} id={id} />
      })}
    </div>
  )
}

export default CardList
