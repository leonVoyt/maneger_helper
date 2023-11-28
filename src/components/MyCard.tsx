'use client'

import Image from 'next/image'
import React, { FC } from 'react'

import dragonDrop from '../assets/dragonDrop.svg'
import { CardItem } from './CardList'
import { useDrag, useDrop } from 'react-dnd'
const ItemType = 'ITEM'

const MyCard: FC<MyCardProps> = ({ card, index, moveItem, currCard }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { id: card.id, index },
  })
  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index)
        draggedItem.index = index
      }
    },
  })

  return (
    <div
      className={`h-20 flex bg-secondary-gray items-center justify-between min-w-[300px] px-4 rounded-lg mb-2 text-xs cursor-pointer  ${
        currCard && currCard.id === card.id ? 'border-2 border-accent ' : ''
      }`}
    >
      <div className="flex items-center h-full gap-4 ">
        <Image
          alt=""
          src={dragonDrop}
          className="cursor-pointer "
          ref={(node: any) => ref(drop(node?.parentNode?.parentNode))}
        />
        <div>
          <span className="text-sm font-semibold">{`${card.name}`}</span>
          <br />
          <span className="font-semibold text-dim">
            {card.responsebiliesList.length}{' '}
            {card.responsebiliesList.length < 5 ? 'задания' : 'заданий'}
          </span>
        </div>
      </div>
      <div>
        <span className="font-bold text-yellow-500">
          ${card.responsebiliesList.length * 10}{' '}
        </span>
        <span>{`/ час`}</span>
      </div>
    </div>
  )
}

export default MyCard

type MyCardProps = {
  card: CardItem
  index: number
  moveItem: (a: number, b: number) => void
  currCard: CardItem
}
