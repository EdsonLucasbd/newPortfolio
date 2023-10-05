import React from 'react'
import { GameButton } from './GameButton'

export const Keyboard = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-1">
      <GameButton direction='up' className='col-start-2 col-span-2' />
      <GameButton direction='left' />
      <GameButton direction='down' />
      <GameButton direction='right' />
    </div>
  )
}
