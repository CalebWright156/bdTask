import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectData } from '../sampleData'
import { ProjectSectionContainer } from '../styles/ProjectSection.styled'

const ProjectSection = () => {
  return (
    <ProjectSectionContainer>
        { ProjectData.map(data => 
                <ProjectCard alt={data.alt} color={data.color} image={data.image} text={data.text} title={data.title} />
            ) }
    </ProjectSectionContainer>
  )
}

export default ProjectSection