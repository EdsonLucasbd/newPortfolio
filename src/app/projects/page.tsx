import React from 'react'
import { Projects as ProjectsList } from '@/components/Projects'
import { CheckBox } from '@/components/Technologies/CheckBox'
import { NextJsIcon } from '@/components/NextjsIcon'
import { useTechSelection } from '@/hooks/useTechSelection'

export default function Projects() {

  return (
    <div className='flex flex-col md:flex-row'>
      <aside className='flex flex-col divide-y divide-primary-100'>
        <span className='my-2 mx-4 flex flex-row gap-3 text-secondary-200 
          text-sm'>
          <i className="ri-arrow-down-s-fill" />
          projects
        </span>
        <div className="px-5 pt-4">

          <label className="flex gap-[10px] items-center cursor-pointer">
            <CheckBox
              tech={'nextjs'}
              defaultChecked
            />
            <NextJsIcon className='text-2xl text-secondary-300 peer-disabled:text-secondary-300/50' />
            <span className=' text-secondary-200 peer-disabled:text-secondary-300'>Next.JS</span>
          </label>
        </div>
      </aside>
      <div className='mx-6 md:mx-[127.65px] my-28 md:my-20 w-full'>
        <ProjectsList />
      </div>
    </div>
  )
}
