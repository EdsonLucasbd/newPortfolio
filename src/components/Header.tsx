"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const path = usePathname()
  const escapedUrl = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`^${escapedUrl}$`)
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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

  useEffect(() => {
    const screenWidth = window.innerWidth

    if (screenWidth < 768) {
      setIsMobile(true)
    } else setIsMobile(false)

  }, [isMobile])

  return (
    <div className='w-full h-14 flex flex-row
    text-secondary-300 border-b border-primary-100 bg-primary-300
     justify-between md:justify-normal'>
      <span className='py-[17px] pl-[22px] pr-24'>edson-lucas</span>
      {!isMobile && options.map((option) => (
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
      {!isMobile ? (

        <Link href='/' className='py-[17px] px-[31px] border-l border-primary-100 ml-auto
        hover:text-secondary-200 transition-colors ease-in-out duration-200'
        >
          _contact-me
        </Link>

      ) : (
        <div className='flex items-center justify-center pr-[22px]'>
          <Menu
            role='button'
            className='cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          />
          <div data-open={isOpen} className="hidden data-[open=true]:flex 
            flex-col items-center justify-between
            absolute top-[48.2%] left-1/2 -translate-x-1/2 
            -translate-y-1/2 w-[91%] h-[92%] bg-primary-200 rounded-lg 
            ring-1 ring-primary-100 z-20">
            <div className='w-full'>
              <div className="flex flex-row justify-between w-full">
                <span className='my-[17px] ml-[22px]'>edson-lucas</span>
                <X
                  role='button'
                  className='my-[17px] mr-[18px]'
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
              <div className='flex flex-col w-full will-change-[opacity,transform] animate-slideDownAndFade'>
                {isOpen && options.map((option) => (
                  <Link
                    key={option.title}
                    href={option.link}
                    className='first:border-b-0 last:border-t-0 border-y py-[17px] px-[31px] even:border-l even:border-r border-primary-100
                  hover:text-secondary-200 transition-colors ease-in-out duration-200'
                  >
                    {option.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative flex flex-row w-full p-[18px] items-center
              border-t border-primary-100">
              <p>find me in:</p>

              <div className="absolute flex items-center h-full
                right-0">
                <a href="https://github.com/EdsonLucasbd" className='flex flex-row gap-1
                items-center hover:text-secondary-200 transition-colors ease-in-out duration-200
                  border-x border-primary-100 p-[14px] h-full '>
                  <i className='ri-github-fill ri-xl' />
                </a>
                <a href="https://www.linkedin.com/in/edson-lucas-bd/" className='flex flex-row gap-1
                items-center hover:text-secondary-200 transition-colors ease-in-out duration-200
                  border-x border-primary-100 p-[14px] h-full '>
                  <i className='ri-linkedin-box-fill ri-xl' />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
