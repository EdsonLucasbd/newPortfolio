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

      <div className='relative flex flex-col w-[370px] h-[315px] rounded-lg
      ring-1 ring-primary-100'>
        <Image
          alt=''
          src={image!}
          aria-hidden
          fill
          className='h-[145.44px] w-auto'
        />
        <div className="flex flex-col items-start">
          {description}
          <Link
            href={link!}
            aria-label={`ir para o projeto ${project}`}
            rel='noopener noreferrer'
          >
            view-project
          </Link>
        </div>
      </div>
    </div>
  )
}
