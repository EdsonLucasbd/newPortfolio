import { HeartCrack } from 'lucide-react'
import React from 'react'

export const NoProject = () => {
  return (
    <div className='flex flex-col w-full h-full items-center justify-between 
      text-secondary-300 text-2xl'>
      <HeartCrack className='stroke-1 w-40 h-40' />
      Nenhum projeto encontrado.
    </div>
  )
}
