import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProjectProps {
  project: string,
  image: string,
  link: string,
  description: string,
  index: number
};

export const Project = ({ project, link, image, description, index }: ProjectProps) => {

  return (
    <div className='flex flex-col gap-[14px]'>
      <h2 className='flex flex-row text-secondary-300 gap-2'>
        <span className='text-secondary-500'>
          {`Project ${index}`}
        </span>
        {`//${project}`}
      </h2>

      <div className='flex flex-col w-[370px] h-[314.82px] rounded-lg
        ring-1 ring-primary-100'>
        <div className="relative w-full h-[145.44px]">
          <Image
            alt=''
            src={image!}
            aria-hidden
            fill
            className='h-[145.44px] w-auto object-cover rounded-tr-lg rounded-tl-lg'
          />
        </div>

        <div className="flex flex-col items-start z-10 px-8 py-4 gap-[21.82px]
        text-secondary-300 border-t border-primary-100">
          {description}
          <Link
            href={link!}
            aria-label={`ir para o projeto ${project}`}
            rel='noopener noreferrer'
            className='w-[129px] h-[38px] bg-primary-100 rounded-md text-secondary-100
            flex items-center justify-center outline-none focus:ring-4 focus:ring-secondary-300
            focus:ring-opacity-40 hover:bg-primary-400 transition-colors ease-in-out duration-200'
          >
            view-project
          </Link>
        </div>
      </div>
    </div>
  )
}
