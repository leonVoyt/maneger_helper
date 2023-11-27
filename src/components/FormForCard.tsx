'use client'

import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import CustomCheckBox from './customCheckBox/CustomCheckBox'
import { CardItem } from './CardList'

const FormForCard: FC<FormForCardProps> = ({ setCardlist }) => {
  const submitFotm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    let price = 0
    let name = formData.get('naming')
    responsibilitiesList.forEach((el) => {
      el.responsebList.forEach((ins) => {
        formData.get(ins.idName) === 'on' ? (price += 10) : null
      })
    })
    setCardlist((prev) => [
      ...prev,
      { id: Math.random(), name: name, responsebiliesList: 1, price: price },
    ])
  }
  return (
    <form
      className="bg-secondary-gray flex flex-1 rounded-lg p-4 flex-col h-full text-sm overflow-y-auto"
      onSubmit={submitFotm}
    >
      <div className="bg-main-gray rounded-lg">
        <div className="p-4 flex flex-col gap-1">
          <label htmlFor="naming" className="text-xs cursor-pointer text-dim">
            Название
          </label>
          <input
            id="naming"
            type="text"
            name="naming"
            placeholder="Введите название"
            className="bg-transparent border-2 border-main-border rounded-lg px-4  py-3"
          />
        </div>
      </div>
      <div className="relative w-full mt-7 flex h-full flex-col ">
        <div className="absolute -top-3 right-0 w-full bg-main-gray rounded-t-lg h-10 flex items-center z-50 shadow-2xl">
          <span className="ml-3 text-dim">Обязаности</span>
        </div>
        <div className="flex-grow bg-main-gray pt-9 pl-3 flex flex-wrap w-full rounded-lg ">
          {responsibilitiesList.map((responseb) => (
            <div className="w-1/2 text-xs" key={responseb.id}>
              <p className="text-xs text-dim mb-1">{responseb.name}</p>
              {responseb.responsebList.map((rspbList) => (
                <CustomCheckBox
                  key={rspbList.id}
                  name={rspbList.name}
                  idName={rspbList.idName}
                />
              ))}
            </div>
          ))}
        </div>
        <button className="h-12 mt-2 bg-accent w-full rounded-lg">
          Сохранить
        </button>
      </div>
    </form>
  )
}

export default FormForCard

type FormForCardProps = {
  setCardlist: Dispatch<SetStateAction<CardItem[]>>
}

const responsibilitiesList = [
  {
    id: 0,
    name: 'Торговля',
    responsebList: [
      { id: 0, name: 'Продавать продукт', idName: 'sale1' },
      { id: 1, name: 'Выставлять цены', idName: 'sale2' },
      { id: 2, name: 'Смотреть аналитику', idName: 'sale3' },
    ],
  },
  {
    id: 1,
    name: 'Производство',
    responsebList: [
      { id: 0, name: 'Закупать сырье', idName: 'prod1' },
      { id: 1, name: 'Назначать рабочих', idName: 'prod2' },
    ],
  },
  {
    id: 2,
    name: 'Разборки',
    responsebList: [
      { id: 0, name: 'Дуель', idName: 'showdown1' },
      { id: 1, name: 'Выставлять претензии', idName: 'showdown2' },
    ],
  },
  {
    id: 3,
    name: 'Управление',
    responsebList: [
      { id: 0, name: 'Назначать должности', idName: 'management1' },
      { id: 1, name: 'Выгонять из банды', idName: 'management2' },
    ],
  },
]
