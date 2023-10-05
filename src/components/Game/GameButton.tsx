import React from 'react'
import { twMerge } from 'tailwind-merge'

interface GameButtonProps {
  direction: string
  className?: string
}

export const GameButton = ({ direction, className }: GameButtonProps) => {
  return (
    <button className={twMerge(`flex items-center justify-center w-[49.08px] h-[28.69px] 
    bg-primary-400 rounded-lg`, className)}
    >
      <i className={`ri-arrow-${direction}-s-fill text-secondary-100`}></i>
    </button>
  )
}
