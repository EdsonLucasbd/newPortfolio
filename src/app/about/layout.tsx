import { Explorer } from '@/components/Explorer'
import { OpenFilesTabs } from '@/components/FilesTabs'
import { OpenFilesProvider } from '@/hooks/useOpenFile'
import { Bug, Cog, Files, GitBranch, Puzzle, Search } from 'lucide-react'
import React from 'react'

export default function BioLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className='flex flex-col gap-12 md:grid md:grid-cols-editor max-h-full'>
      <div className='hidden md:flex flex-col justify-between border-r border-primary-200
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

      <OpenFilesProvider>
        <aside className='flex flex-col divide-y divide-primary-100'>
          <span className='my-2 mx-4 flex flex-row gap-3 text-secondary-200 
            text-sm'>
            <i className="ri-arrow-down-s-fill" />
            portfolio
          </span>
          <Explorer />
        </aside>
        <div className="h-full relative flex flex-col">
          <OpenFilesTabs />
          <div className="h-full relative">{children}</div>
        </div>
      </OpenFilesProvider>
    </div>
  )
}
