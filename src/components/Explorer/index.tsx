import { FileCode } from "lucide-react";

export type FileType = {
  title: string;
  icon: React.ReactNode;
};

export const explorerFiles: Record<string, FileType> = {
  "/about/bio": {
    icon: <FileCode size={16} />,
    title: "bio.json",
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

