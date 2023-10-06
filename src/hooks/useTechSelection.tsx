"use client"
import React, { createContext, useContext, useState } from "react"

type TechSelectionState = {
  selectedTechnology: string;
  toogleTechnology: (tech: string) => void;
}

const TechSelectionContext = createContext<TechSelectionState | undefined>(undefined)

export const TechSelectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTechnology, setSelectedselectedTechnology] = useState<string>('nextjs')

  const toogleTechnology = (tech: string) => {
    setSelectedselectedTechnology(tech)
  }

  return (
    <TechSelectionContext.Provider
      value={{ selectedTechnology, toogleTechnology }}
    >
      {children}
    </TechSelectionContext.Provider>
  )
}

export const useTechSelection = () => {
  const context = useContext(TechSelectionContext)
  if (!context) {
    throw new Error('useTechSelecion deve ser usado dentro de um TechSelectionProvider')
  }
  return context;
}
