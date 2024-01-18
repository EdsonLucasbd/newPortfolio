"use client"

import { ReactNode, useEffect } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { useOpenFiles } from '@/hooks/useOpenFile';

interface FileProps extends LinkProps {
  children: ReactNode[];
}

export function File(props: FileProps) {
  const { markFileAsOpen, openFiles, closeFile, currentOpenFile } = useOpenFiles();
  const pathName = usePathname();

  const isCurrentActive = pathName === props.href;

  // const closeItem = () => {
  //   const currentFile = currentOpenFile()?.title.split('.')[0]
  //   if (openFiles.length > 1) {
  //     const fileIndex = openFiles.findIndex(file => file === currentFile)
  //     closeFile(fileIndex)
  //   }
  //   return
  // }

  const openItem = () => {
    markFileAsOpen(props.href.toString())
  }

  return (
    <Link
      data-active={isCurrentActive}
      onClick={openItem}
      className="flex text-xs items-center gap-2 py-1 px-4 pl-9 
        text-secondary-300 hover:bg-primary-100 hover:text-secondary-100 
        data-[active=true]:bg-primary-100 data-[active=true]:text-secondary-100
        transition-colors ease-in-out duration-200"
      {...props}
    />
  );
}
