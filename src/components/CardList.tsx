import React, { FC } from 'react'
import MyCard from './MyCard'
import { useMyContext } from '~/context'

const CardList: FC<CardListProps> = ({ cardlist, handleUpdateCard }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="overflow-y-auto flex-1 ">
        {cardlist.length ? (
          cardlist.map((card) => (
            <div key={card.id} onClick={() => handleUpdateCard(card, 'update')}>
              <MyCard card={card} />
            </div>
          ))
        ) : (
          <h1 className="min-w-[300px]">Список пуст</h1>
        )}
      </div>
      <button
        className="h-12 mt-2 bg-accent w-full rounded-lg mb-4"
        onClick={() => {
          handleUpdateCard(null, 'create')
          //   setShowForm(true)
          //   handleUpdateCard(0, 'create')
        }}
      >
        Создать новую должность
      </button>
    </div>
  )
}

export default CardList

type CardListProps = {
  cardlist: CardItem[]
}
export type CardItem = {
  id: number
  name: FormDataEntryValue | null
  price: number
  responsebiliesList: number
}
