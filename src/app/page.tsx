import Image from 'next/image'
import React from 'react'
import shiki from 'shiki'

export default async function Hello() {
  const theme = await shiki.getHighlighter({
    theme: 'github-dark',
  })

  const code = theme.codeToHtml('const github = "https://github.com/EdsonLucasbd/newPortfolio"', { lang: 'javascript' })

  return (
    <div className='w-min md:w-full h-full flex flex-row items-center justify-evenly
      py-[180px]'>
      <div className="flex flex-col animate-fade-in-bottom-soft">
        <div className="flex flex-col text-secondary-200 gap-2">
          <p className='text-base md:text-lg'>Olá, me chamo</p>
          <h1 className='text-3xl md:text-6xl -indent-1'>Edson Lucas</h1>
          <p className='text-xl md:text-3xl text-secondary-500 flex flex-row gap-1'>
            <span className='animate-pulse'>{'>'}</span>
            Front-end developer
          </p>
        </div>

        <div className="hidden md:flex flex-col mt-20 gap-2">
          <p className='text-secondary-300'>{'// complete o jogo para continuar'}</p>
          <p className='text-secondary-300'>{'// você também pode conferir isso no meu github'}</p>
          <a
            href='"https://github.com/EdsonLucasbd/newPortfolio"'
            className='shiki-theme-home'
            dangerouslySetInnerHTML={{ __html: code }}
          />
        </div>
      </div>
      <div className='h-fit relative'>
        <span className='absolute top-0 flex blur-3xl bg-accent-200 w-[400px] 
            h-[200px] rotate-12 rounded-full'
        />
        <span className='absolute bottom-0 right-0 flex blur-3xl bg-secondary-500 w-[400px] 
            h-[200px] -rotate-12 rounded-full'
        />
        <iframe className='hidden md:block relative w-[28.125rem] h-[420px] rounded-lg' src='https://js-snake-sigma.vercel.app/' title='javascript snake game' height={475} />
      </div>
    </div>
  )
}
