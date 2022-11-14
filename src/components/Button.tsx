import React from 'react'
import { ButtonStyled } from '../styles/Button.styled'
import { TitleProps } from '../types'


const Button: React.FC<TitleProps> = ({ title }) => {
  return (
    <ButtonStyled>
      {title}
    </ButtonStyled>

  )
}

export default Button