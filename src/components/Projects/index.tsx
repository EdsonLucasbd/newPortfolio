import React from 'react'
import { Project } from './Project';

type ProjectType = {
  project: string,
  image: string,
  link: string,
  description: string
};

export const Projects = async () => {
  async function getProjectData() {
    const res = await fetch('https://gist.github.com/EdsonLucasbd/1eec5369f96797eb2f5cdcce94d959a4/raw/6ddbcb342392a997d507efc2c4822c55350aac7e/gistfile1.txt')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

  const data: ProjectType[] = await getProjectData()

  return (
    <div className='grid grid-cols-2 gap-10'>
      {data.map((project, index) => (
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
