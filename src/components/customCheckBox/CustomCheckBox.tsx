'use client'
import React, { ChangeEvent, FC } from 'react'
import classes from './CustomCheckBox.module.css'

const CustomCheckBox: FC<CustomCheckBoxProps> = ({ name, idName }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {}

  return (
    <div className="flex items-center gap-2 ">
      <input
        id={idName}
        name={idName}
        type="checkbox"
        className={classes.checkBox}
        onChange={handleChange}
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
}
