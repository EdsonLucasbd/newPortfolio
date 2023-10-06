"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const path = usePathname()
  const escapedUrl = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`^${escapedUrl}$`)

  const options = [
    {
      title: '_hello',
      link: '/',
      reference: '/#'
    },
    {
      title: '_about-me',
      link: '/about',
      reference: 'about'
    },
    {
      title: '_projects',
      link: '/projects',
      reference: 'projects'
    },
  ]

  return (
    <div className='w-full h-14 flex flex-row
    text-secondary-300 border-b border-primary-100 bg-primary-300'>
      <span className='py-[17px] pl-[22px] pr-24'>edson-lucas</span>
      {options.map((option) => (
        <Link
          key={option.title}
          href={option.link}
          className='py-[17px] px-[31px] even:border-l even:border-r border-primary-100
          hover:text-secondary-200 transition-colors ease-in-out duration-200 
          aria-[current="true"]:border-b-2 aria-[current="true"]:border-b-accent-100'
          aria-current={regex.test(option.link) || path.indexOf(option.reference) !== -1}
        >
          {option.title}
        </Link>
      ))}
      <Link href='/' className='py-[17px] px-[31px] border-l border-primary-100 ml-auto
      hover:text-secondary-200 transition-colors ease-in-out duration-200'
      >
        _contact-me
      </Link>
    </div>
  )
}
