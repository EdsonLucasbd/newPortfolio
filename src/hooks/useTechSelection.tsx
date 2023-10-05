"use client"
import React, { createContext, useContext, useState } from "react"

export type Technology = {
  name: string
}

type TechSelectionState = {
  selectedTechnologies: Technology[];
  toogleTechnology: (tech: Technology) => void;
  clearSelection: () => void
}

const TechSelectionContext = createContext<TechSelectionState | undefined>(undefined)

export const TechSelectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([])

  const toogleTechnology = (tech: Technology) => {
    setSelectedTechnologies((prevSelectedTech) => {
      if (prevSelectedTech.some((technology) => technology.name === tech.name)) {
        return prevSelectedTech.filter((technology) => technology.name !== tech.name)
      } else {
        return [...prevSelectedTech, tech];
      }
    })
  }

  const clearSelection = () => {
    setSelectedTechnologies([])
  }

  return (
    <TechSelectionContext.Provider
      value={{ selectedTechnologies, toogleTechnology, clearSelection }}
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
