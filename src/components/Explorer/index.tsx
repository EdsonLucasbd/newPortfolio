import { FileCode, FileJson } from "lucide-react";
import { Folder } from "./Folder";
import { File } from "./File";
import { ResumeMenu } from "../ResumeMenu";

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

      <ResumeMenu />
    </div>
  )
}