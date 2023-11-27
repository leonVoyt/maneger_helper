import Image from 'next/image'
import React, { FC } from 'react'

import dragonDrop from '../assets/dragonDrop.svg'
import { CardItem } from './CardList'

const MyCard: FC<MyCardProps> = ({ card }) => {
  return (
    <div className="h-20 flex bg-secondary-gray items-center justify-between min-w-[300px] px-4 rounded-lg mb-2 text-xs">
      <div className="flex items-center h-full gap-4 ">
        <Image alt="" src={dragonDrop} />
        <div>
          <span className="text-sm font-semibold">{`${card.name}`}</span>
          <br />
          <span className="font-semibold text-dim">
            {card.responsebiliesList} заданий
          </span>
        </div>
      </div>
      <div>
        <span className="font-bold text-yellow-500">${card.price} </span>
        <span>/ chas</span>
      </div>
    </div>
  )
}

export default MyCard

type MyCardProps = {
  card: CardItem
}
