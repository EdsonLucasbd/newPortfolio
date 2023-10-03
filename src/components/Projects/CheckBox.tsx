"use client"
import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  className?: string
  change?: () => void
}

export const CheckBox = ({ className, change }: CheckBoxProps) => {
  return (
    <input
      type="checkbox"
      defaultChecked
      onChange={change}
      name="tecnology"
      id="next-js"
      className={twMerge(`h-[18px] w-[18px] accent-secondary-300`, className)}
    />
  )
}
