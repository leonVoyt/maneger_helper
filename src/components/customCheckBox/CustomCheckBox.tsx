'use client'
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import classes from './CustomCheckBox.module.css'
import { CardItem } from '../CardList'

const CustomCheckBox: FC<CustomCheckBoxProps> = ({
  name,
  idName,
  reload,
  currCard,
}) => {
  const ref = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    let isChecked = false
    if (currCard !== null) {
      currCard.list.find((el) => el[idName])
        ? (isChecked = true)
        : (isChecked = false)
    }
    if (ref.current) {
      ref.current.checked = isChecked
    }
  }, [reload, currCard.id])

  return (
    <div className="flex items-center gap-2 ">
      <input
        ref={ref}
        id={idName}
        name={idName}
        type="checkbox"
        className={classes.checkBox}
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
