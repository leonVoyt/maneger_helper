'use client'
import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useRef,
  useState,
} from 'react'
import CustomCheckBox from './customCheckBox/CustomCheckBox'
import { CardItem } from './CardList'
import { ActionType } from '~/app/positions/page'

const FormForCard: FC<FormForCardProps> = ({
  setCardlist,
  action,
  currCard,
}) => {
  // State to manage form reload and create a reference for the input element
  const [reload, setReload] = useState(false)
  const ref = useRef<HTMLInputElement | null>(null)

  // Function to handle form submission
  const submitForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Get form data and initialize count and name variables
    const formData = new FormData(e.currentTarget)
    let count = 0
    let name = formData.get('naming')

    // Iterate through responsibilities and their lists to count selected items
    responsibilitiesList.forEach((el) => {
      el.responsebList.forEach((ins) => {
        formData.get(ins.idName) === 'on' ? (count += 1) : null
      })
    })

    // Update the card list based on the form action type
    if (action === 'create') {
      setCardlist((prev) => [
        ...prev,
        {
          id: Math.random(),
          name: name,
          responsebiliesList: count,
          price: count * 10,
          order: 0,
        },
      ])
    } else if (action === 'update') {
      setCardlist((prev) => {
        return prev.map((card) =>
          card.id === currCard?.id
            ? {
                ...card,
                name: name,
                price: count * 10,
                responsebiliesList: count,
              }
            : card
        )
      })
    }

    // Trigger a reload by toggling the reload state for set false all checkbox
    setReload(!reload)
    // Clear the input value if the ref exists
    if (ref.current) {
      ref.current.value = ''
    }
  }

  return (
    <form
      className="bg-secondary-gray flex flex-1 rounded-lg p-4 flex-col h-full text-sm overflow-y-auto"
      onSubmit={submitForm}
    >
      <div className="bg-main-gray rounded-lg">
        <div className="p-4 flex flex-col gap-1">
          <label htmlFor="naming" className="text-xs cursor-pointer text-dim">
            Название
          </label>
          <input
            ref={ref}
            id="naming"
            type="text"
            name="naming"
            placeholder="Введите название"
            className="bg-transparent border-2 border-main-border rounded-lg px-4 py-3"
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
                  reload={reload}
                />
              ))}
            </div>
          ))}
        </div>
        {/* Button to submit form */}
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
  action: ActionType
  currCard: CardItem | null
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
