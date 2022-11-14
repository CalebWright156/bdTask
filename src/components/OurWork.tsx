import React from 'react'
import { TitleStyled } from '../styles/TitleStyled'

interface TitleProps {
    title: string
}

const OurWork: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
    <TitleStyled>
        <h1>{title}</h1>
    </TitleStyled>
    </>
  )
}

export default OurWork