'use client'
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { File, Menu } from 'lucide-react';

export const ResumeMenu = () => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild aria-label="Menu para baixar meu curriculo">
        <button
          className="flex items-center gap-2 px-2 py-1 w-full 
          border border-transparent text-secondary-300 data-[open=true]:text-secondary-100 
          hover:bg-primary-100 hover:text-secondary-100 
          focus:bg-primary-100 focus:border-primary-100 focus:text-secondary-100
          transition-colors ease-in-out duration-200"
        >
          <Menu size={16} />
          Resume
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-primary-100 z-10 flex flex-col gap-2 p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade"
          side='bottom'
          sideOffset={5}
        >
          <DropdownMenu.Item className="text-sm outline-none">
            <a
              href="/EdsonLucas-curriculo.pdf"
              role='button'
              aria-label='Clique para baixar o meu curriculo em português no formato PDF.'
              title='Baixar meu curriculo'
              download
              className='flex items-center gap-2 px-2 py-1 w-full 
              border border-transparent text-secondary-300 data-[open=true]:text-secondary-100 
              hover:bg-secondary-300 hover:text-secondary-100 
              focus:bg-secondary-300 focus:border-secobg-secondary-300 focus:text-secondary-100
              transition-colors ease-in-out duration-200'
            >
              <File size={16} />
              resume-ptBr.pdf
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm outline-none">
            <a
              href="/EdsonLucas-resume.pdf"
              role='button'
              aria-label='Clique para baixar o meu curriculo em inglês no formato PDF.'
              title='Baixar meu curriculo'
              download
              className='flex items-center gap-2 px-2 py-1 w-full 
              border border-transparent text-secondary-300 data-[open=true]:text-secondary-100 
              hover:bg-secondary-300 hover:text-secondary-100 
              focus:bg-secondary-300 focus:border-secbg-secondary-300 focus:text-secondary-100
              transition-colors ease-in-out duration-200'
            >
              <File size={16} />
              resume-en.pdf
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="fill-primary-100" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};