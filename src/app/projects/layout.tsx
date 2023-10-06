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
    <div className='grid grid-cols-projects max-h-full'>
      <div className='flex flex-col justify-between border-r border-primary-200
      divide-y divide-primary-100 bg-primary-300'>
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
      {children}
    </div>
  )
}
