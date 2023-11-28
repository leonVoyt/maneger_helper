'use client'
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import classes from './CustomCheckBox.module.css'
import { CardItem } from '../CardList'

const CustomCheckBox: FC<CustomCheckBoxProps> = ({
  name,
  idName,
  currCard,
}) => {
  const [isChecked, setIschecked] = useState(false)
  useEffect(() => {
    if (currCard !== null) {
      currCard.list.find((el) => el[idName])
        ? setIschecked(true)
        : setIschecked(false)
    } else {
      setIschecked(false)
    }
  }, [currCard])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIschecked(!isChecked)
  }

  return (
    <div className="flex items-center gap-2 ">
      <input
        onChange={handleOnChange}
        id={idName}
        name={idName}
        type="checkbox"
        className={classes.checkBox}
        checked={isChecked}
      />
      <label htmlFor={idName} className="cursor-pointer">
        {name}
      </label>
    </div>
  )
}

export default CustomCheckBox

type CustomCheckBoxProps = {
  name: string
  idName: string
  reload: boolean
  currCard: CardItem
}
