'use client'

import React, { useState } from 'react'
import CardList, { CardItem } from '~/components/CardList'
import FormForCard from '~/components/FormForCard'
import { useMyContext } from '~/context'

const Positions = () => {
  const [cardlist, setCardlist] = useState<CardItem[]>([])

  const { showForm } = useMyContext()

  return (
    <div className="p-10 flex gap-4 h-full ">
      <CardList cardlist={cardlist} />
      {showForm && <FormForCard setCardlist={setCardlist} />}
    </div>
  )
}

export default Positions
