import { useOpenFiles } from '@/hooks/useOpenFile';
import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface FileTabProps {
  isActive: boolean,
  index: number,
}

export const CloseTabButton = ({ index, isActive }: FileTabProps) => {
  const { openFiles, closeFile } = useOpenFiles();

  if (isActive) {
    return (
      <Link
        onClick={() => {
          closeFile(index);
        }}
        href={index - 1 >= 0 ? openFiles[index - 1] : "/"}
        className="w-[20px] h-10 flex justify-center items-center rounded hover:bg-[#817c9c26]"
      >
        <X
          data-active={isActive}
          className="text-secondary-300 data-[active=true]:text-white"
          size={16}
        />
      </Link>
    )
  }
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        closeFile(index);
      }}
      className="w-[20px] h-10 flex justify-center items-center rounded hover:bg-[#817c9c26] cursor-pointer"
    >
      <X
        data-active={isActive}
        className="data-[active=true]:text-white"
        size={16}
      />
    </a>
  )
}
