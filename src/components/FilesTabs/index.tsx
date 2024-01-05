"use client";

import { useOpenFiles } from "@/hooks/useOpenFile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { explorerFiles } from "../Explorer";
import { CloseTabButton } from "./CloseTabButton";

export function OpenFilesTabs() {
  const { openFiles } = useOpenFiles();
  const pathName = usePathname();

  return (
    <div className="h-9 text-transparent text-sm flex flex-row">
      {openFiles?.map((openFile, index) => {
        const isActive = pathName === openFile;

        const file = explorerFiles[openFile];

        if (!file) {
          return <></>;
        }

        return (
          <div
            key={index}
            data-active={isActive}
            className="group w-full md:w-fit h-full flex items-center gap-[6px] pl-[10px] 
              hover:bg-[#817c9c14] hover:text-secondary-100 
              data-[active=true]:bg-[#817c9c14] data-[active=true]:text-secondary-200"
          >
            <Link href={openFile} className="flex gap-[6px] items-center ">
              <span
                className="text-secondary-300 group-data-[active=true]:text-secondary-200">{file.icon}</span>
              <span
                className="text-secondary-300 group-data-[active=true]:text-secondary-200"
              >
                {file.title}
              </span>
            </Link>
            <span className="w-7 flex items-center">
              <CloseTabButton isActive={isActive} index={index} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
