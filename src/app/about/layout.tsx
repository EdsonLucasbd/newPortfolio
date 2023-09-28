import { File } from '@/components/Explorer/File'
import { Folder } from '@/components/Explorer/Folder'
import { Bug, Cog, FileJson, FileType2, Files, GitBranch, Puzzle, Search } from 'lucide-react'
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


      <aside className='flex flex-col divide-y divide-primary-100 border-r border-primary-100'>
        <span className='my-2 mx-4 flex flex-row gap-3 text-secondary-200 
          text-sm'>
          <i className="ri-arrow-down-s-fill" />
          portfolio
        </span>
        <div className="px-2 pt-4">
          <Folder defaultOpen title='bio'>
            <File href='/about/bio'>
              <FileJson size={16} />
              bio.json
            </File>
          </Folder>
          <Folder title='education' color='text-accent-300'>
            <File href='/about/education'>
              <FileJson size={16} />
              educ.json
            </File>
          </Folder>
          <Folder title='experience' color='text-accent-400'>
            <File href='/about/experience'>
              <FileJson size={16} />
              exp.json
            </File>
          </Folder>
        </div>
      </aside>
      {children}
    </div>
  )
}
