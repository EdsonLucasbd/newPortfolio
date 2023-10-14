import React from 'react'
import { Keyboard } from './Game/Keyboard'
import { Grid } from './Game/Grid'

export const GameBox = () => {
  return (
    <div className='relative w-[510px] h-[475px] flex items-center justify-center
      bg-[url("/gameBackground.png")] bg-contain bg-no-repeat'
    >
      <Grid></Grid>
      <div className="absolute w-[181.38px] h-[142px] bg-primary-300/10 rounded-lg 
        right-9 top-[35px] flex flex-col p-[13px]">
        <div className="flex flex-col text-secondary-200 text-xs mb-[15px]">
          <p>{'// use as setas do'}</p>
          <p>{'// teclado para jogar'}</p>
        </div>
        <Keyboard />
      </div>
    </div>
  )
}
