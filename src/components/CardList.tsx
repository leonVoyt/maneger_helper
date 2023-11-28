import React, { FC } from 'react'
import MyCard from './MyCard'
import { ActionType } from '~/app/positions/page'

const CardList: FC<CardListProps> = ({
  cardlist,
  handleUpdateCard,
  moveItem,
}) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="overflow-y-auto flex-1 ">
        {cardlist.length ? (
          cardlist.map((card, index) => (
            <div key={card.id} onClick={() => handleUpdateCard(card, 'update')}>
              <MyCard card={card} moveItem={moveItem} index={index} />
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
  handleUpdateCard: (CardItem: CardItem | null, actionProp: ActionType) => void
  moveItem: (a: number, b: number) => void
}
export type CardItem = {
  id: number
  name: FormDataEntryValue | null
  price: number
  responsebiliesList: number
  order: number
  list: ResponsebiliesListType[]
}

export type ResponsebiliesListType = {
  [x: string]: boolean
}
