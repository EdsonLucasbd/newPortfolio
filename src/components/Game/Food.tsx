import React from 'react'

interface FoodProps {
  position: { x: number; y: number };
}

export const Food = ({ position }: FoodProps) => {
  return (
    <div className="relative m-[.125rem]">
      <div className={`absolute
      left-[${position.x}NaNrem] top-[${position.y}NaNrem] w-2 h-2
      bg-accent-200 animate-pulse`}
      ></div>
    </div>
  )
}
