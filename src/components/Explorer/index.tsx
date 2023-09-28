import { FileType2 } from "lucide-react";

export type FileType = {
  title: string;
  icon: React.ReactNode;
};

export const explorerFiles: Record<string, FileType> = {
  "about/bio": {
    icon: <FileType2 size={16} />,
    title: "settings.json",
  },
  "about/education": {
    icon: <FileType2 size={16} />,
    title: "extensions.json",
  },
};

