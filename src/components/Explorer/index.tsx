import { Download, FileCode, FileJson } from "lucide-react";
import { Folder } from "./Folder";
import { File } from "./File";

export type FileType = {
  title: string;
  icon: React.ReactNode;
};

export const explorerFiles: Record<string, FileType> = {
  "/about/bio": {
    icon: <FileCode size={16} />,
    title: "bio.txt",
  },
  "/about/education": {
    icon: <FileCode size={16} />,
    title: "educ.json",
  },
  "/about/experience": {
    icon: <FileCode size={16} />,
    title: "exp.json",
  },
};

export function Explorer() {
  return (
    <div className="px-2 pt-4">

      <Folder defaultOpen title='bio'>
        <File href='/about/bio'>
          <FileJson size={16} />
          bio.txt
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

      <a
        href="/EdsonLucas-curriculo.pdf"
        role='button'
        aria-label='Clique para baixar o meu curriculo em PDF.'
        title='Baixar meu curriculo'
        download
        className='flex items-center gap-2 px-2 py-1 w-full 
              border border-transparent text-secondary-300 data-[open=true]:text-secondary-100 
              hover:bg-primary-100 hover:text-secondary-100 
              focus:bg-primary-100 focus:border-primary-100 focus:text-secondary-100
              transition-colors ease-in-out duration-200'
      >
        <Download size={16} />
        curriculo
      </a>
    </div>
  )
}