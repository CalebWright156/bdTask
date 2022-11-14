import styled from 'styled-components'

export const TitleStyled = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${props => props.theme.fontFamily.main};

    h1 {
        font-size: 3rem;
    }
`