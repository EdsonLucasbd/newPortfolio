'use client'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { explorerFiles } from './Explorer'
import { usePathname } from 'next/navigation'

interface FolderButtonProps {
  title: string,
  className: string
}

export const FolderButton = ({ className, title }: FolderButtonProps) => {
  const [isActive, setIsActive] = useState(false)
  const pathName = usePathname()

  const [openFiles, setOpenFiles] = useState<string[]>(() => {
    if (pathName) {
      const openTab = explorerFiles[pathName];
      if (openTab) {
        return [pathName];
      }
    }

    return [];
  });


  return (
    <button className='flex flex-row gap-3 w-full text-secondary-200 text-sm'
      onClick={() => setIsActive(!isActive)}
    >
      {isActive ? (
        <>
          <i className="ri-arrow-down-s-line text-secondary-300" />
          <i className={twMerge("ri-folder-open-fill text-accent-100", className)} />
        </>
      ) : (
        <>
          <i className="ri-arrow-right-s-line text-secondary-300" />
          <i className={twMerge("ri-folder-3-fill text-accent-100", className)} />
        </>
      )}

      {title}
    </button>
  )
}
