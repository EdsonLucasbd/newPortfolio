"use client"
import { useTechSelection } from '@/hooks/useTechSelection'
import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  className?: string
  change?: (tech: string) => void
  tech: string
  defaultChecked?: boolean
}

export const CheckBox = ({ className, tech, defaultChecked, ...props }: CheckBoxProps) => {
  const { selectedTechnology, toogleTechnology } = useTechSelection()

  return (
    <input
      {...props}
      type="radio"
      value={tech}
      checked={tech === selectedTechnology}
      onChange={(e) => toogleTechnology(e.target.value)}
      name="tecnology"
      className={twMerge(`peer
        relative h-5 w-5 disabled:cursor-not-allowed disabled:bg-slate-700
        appearance-none rounded-full border-[0.125rem] border-solid 
        border-secondary-300 outline-none before:pointer-events-none before:absolute 
        before:h-[.9375rem] before:w-[.9375rem] before:scale-0 before:rounded-full 
        before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] 
        before:content-[''] checked:border-secondary-300 checked:bg-secondary-300 
        checked:before:opacity-[0.16] checked:after:absolute checked:after:mt-[.125rem] 
        checked:after:ml-[.3125rem] checked:after:block checked:after:h-[.625rem] checked:after:w-[.375rem] 
        checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 
        checked:after:border-t-0 checked:after:border-solid checked:after:border-white 
        checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer 
        hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
        focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 
        focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
        focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute 
        focus:after:z-[1] focus:after:block focus:after:h-[.625rem] focus:after:w-[.375rem]  
        focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 
        checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] 
        checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
        checked:focus:after:mt-[.125rem] checked:focus:after:ml-[.3125rem] 
        checked:focus:after:h-[.625rem] checked:focus:after:w-[.375rem]  
        checked:focus:after:rotate-45 checked:focus:after:rounded-none 
        checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 
        checked:focus:after:border-t-0 checked:focus:after:border-solid 
        checked:focus:after:bg-transparent`, className)}
    />
  )
}
