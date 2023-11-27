'use client'

import React, { useState } from 'react'
import CardList, { CardItem } from '~/components/CardList'
import FormForCard from '~/components/FormForCard'

const Positions = () => {
  const [cardlist, setCardlist] = useState<CardItem[]>([])
  const [showForm, setShowForm] = useState(false)
  const [currCard, setCurrCard] = useState<CardItem | null>(null)
  const [action, setAction] = useState<ActionType>('create')

  const handleUpdateCard = (CardItem: CardItem, actionProp: ActionType) => {
    setCurrCard(CardItem)
    setAction(actionProp)
    setShowForm(true)
  }

  return (
    <div className="p-10 flex gap-4 h-full ">
      <CardList cardlist={cardlist} handleUpdateCard={handleUpdateCard} />
      {showForm && (
        <FormForCard
          setCardlist={setCardlist}
          action={action}
          currCard={currCard}
        />
      )}
    </div>
  )
}

export default Positions

export type ActionType = 'create' | 'update'
