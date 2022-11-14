import React from 'react'
import { Container } from '../styles/Container'
import { TitleStyled } from '../styles/TitleStyled'
import Button from './Button'
import { TitleProps } from '../types'

const OurWork: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
    <TitleStyled>
        <Container>
         <h1>{title}</h1>
        </Container>
        <Container>
            <Button title='All'/>
            <Button title='Software'/>
            <Button title='Website'/>
            <Button title='Wayfinding'/>
            <Button title='Kiosks'/>
        </Container>
    </TitleStyled>
    </>
  )
}

export default OurWork