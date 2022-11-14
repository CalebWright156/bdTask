import React from 'react'
import { ProjectCardContainer, CardTextStyle } from '../styles/ProjectCard.styled'
import Images from '../images'
import { ProjectCardProps } from '../types'

const ProjectCard:React.FC<ProjectCardProps> = ({ alt, title, text, color, image}) => {
  return (
    <>
    <ProjectCardContainer>
    <img src={image} alt={alt} />
        <CardTextStyle color={color}>
            <h3>{title}</h3>
            <p>{text}</p>
        </CardTextStyle>
    </ProjectCardContainer>

    </>
  )
}

export default ProjectCard