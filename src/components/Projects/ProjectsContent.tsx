"use client"
import React, { useEffect, useState } from 'react'
import { Project } from './Project';
import { useTechSelection } from '@/hooks/useTechSelection';
import { NoProject } from './NoProject';

type ProjectType = {
  project: string,
  image: string,
  link: string,
  description: string
};

interface RequestProps {
  data: {
    [projectName: string]: ProjectType[]
  }
}

interface ProjectsContentProps {
  queryUrl: string,
  technology: string
}

export const ProjectsContent = ({ technology }: ProjectsContentProps) => {
  const [projectData, setProjectData] = useState<RequestProps>()
  const { selectedTechnology } = useTechSelection()

  async function getProjectData() {
    try {
      const res = await fetch('/projects/api')
      if (!res.ok) {
        throw new Error(`Failed to fetch data, status: ${res.status}`)
      }

      const resData = await res.json()

      setProjectData(resData)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProjectData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTechnology])

  if (projectData?.data[technology] === undefined) {
    return <NoProject />
  }


  return (
    <div className='grid grid-cols-2 gap-10'>
      {projectData.data[technology].map((project, index) => (
        <Project
          index={index + 1}
          key={index}
          project={project.project}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  )
}
