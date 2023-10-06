"use client"
import React from 'react'
import { ProjectsContent } from './ProjectsContent';
import { useTechSelection } from '@/hooks/useTechSelection';


export const Projects = () => {
  const { selectedTechnology } = useTechSelection()

  return (
    <ProjectsContent
      queryUrl='https://gist.github.com/EdsonLucasbd/1eec5369f96797eb2f5cdcce94d959a4/raw/6ddbcb342392a997d507efc2c4822c55350aac7e/gistfile1.txt'
      technology={selectedTechnology}
    />
  )
}
