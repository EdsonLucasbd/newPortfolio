import React from 'react'

export interface SnakeProps {
  segments: { x: number; y: number }[];
}

export const Snake = ({ segments }: SnakeProps) => {
  return (
    <div className='relative'>
      {segments.map((segment, index) => (
        <span
          key={index}
          className="absolute bg-green-500 w-3 h-2 first:bg-green-600"
          style={{
            left: `${segment.x}px`,
            top: `${segment.y}px`,
          }}
        ></span>
      ))}
    </div>
  )
}
