"use client"

import * as Collapsible from "@radix-ui/react-collapsible";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

interface FolderProps {
  title: string;
  children: ReactNode
  defaultOpen?: boolean
  color?: string
}

export function Folder({
  title,
  children,
  defaultOpen = false,
  color = 'text-secondary-500'
}: FolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger className="flex items-center gap-2 px-2 py-1 w-full 
        border border-transparent text-secondary-300 data-[open=true]:text-secondary-100 
        hover:bg-primary-100 hover:text-secondary-100 
        focus:bg-primary-100 focus:border-primary-100 focus:text-secondary-100
        transition-colors ease-in-out duration-200"
        data-open={isOpen}
      >
        {isOpen
          ? <i className="ri-arrow-down-s-line text-[10px]" />
          : <i className="ri-arrow-right-s-line text-[10px]" />
        }

        {isOpen
          ? <i className={twMerge("ri-folder-open-fill text-secondary-500", color)} />
          : <i className={twMerge("ri-folder-3-fill text-secondary-500", color)} />
        }
        <span className="text-sm">{title}</span>
      </Collapsible.Trigger>

      <Collapsible.Content>
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}