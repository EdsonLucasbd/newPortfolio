import React from 'react'

export const Footer = () => {
  return (
    <div className='hidden md:flex flex-row w-full h-[49.74px] text-secondary-300 gap-1
    items-center justify-end py-[14px] border-t border-primary-100 px-[22px]
    bg-primary-300'>
      <a href="https://github.com/EdsonLucasbd" className='flex flex-row gap-1
        items-center hover:text-secondary-200 transition-colors ease-in-out duration-200'>
        @EdsonLucasbd
        <i className='ri-github-fill ri-xl' />
      </a>
    </div>
  )
}
