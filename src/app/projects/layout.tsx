import { NextJsIcon } from '@/components/NextjsIcon'
import { CheckBox } from '@/components/Technologies/CheckBox'
import { TechSelectionProvider } from '@/hooks/useTechSelection'
import { Bug, Cog, Files, GitBranch, Puzzle, Search } from 'lucide-react'
import React from 'react'

export default function BioLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className='grid grid-cols-editor max-h-full'>
      <div className='flex flex-col justify-between border-r border-primary-100
      divide-y divide-primary-100'>
        <div className='flex flex-col space-y-4 first:mt-6'>
          <Files className='h-12 p-2 w-auto border-l-2 
            border-secondary-100 text-secondary-100'
          />
          <Search className='h-12 p-2 text-primary-100 w-auto' />
          <GitBranch className='text-primary-100 w-auto' />
          <Bug className='text-primary-100 w-auto' />
          <Puzzle className='text-primary-100 w-auto' />
        </div>
        <Cog className='text-primary-100 w-auto h-12 p-2' />
      </div>


      <TechSelectionProvider>
        <aside className='flex flex-col divide-y divide-primary-100 border-r border-primary-100'>
          <span className='my-2 mx-4 flex flex-row gap-3 text-secondary-200 
          text-sm'>
            <i className="ri-arrow-down-s-fill" />
            projects
          </span>
          <div className="pl-[22px] pt-4">

            <label className="flex gap-[10px] items-center">
              <CheckBox
                tech={{ name: 'nextjs' }}
                defaultChecked
                aria-disabled
                disabled
              />
              <NextJsIcon className='text-2xl text-secondary-300 peer-disabled:text-secondary-300/50' />
              <span className=' text-secondary-200 peer-disabled:text-secondary-300'>Next.JS</span>
            </label>
          </div>
        </aside>
        {children}
      </TechSelectionProvider>
    </div>
  )
}
