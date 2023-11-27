'use client'
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import classes from './CustomCheckBox.module.css'

const CustomCheckBox: FC<CustomCheckBoxProps> = ({ name, idName, reload }) => {
  const ref = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.checked = false
    }
  }, [reload])

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
}
