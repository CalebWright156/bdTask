import styled from "styled-components";

export const ProjectCardContainer = styled.div`
    
    font-family: ${ props => props.theme.fontFamily.main };
    display: flex;
    flex-direction: column;
    overflow: hidden;

    p {
        font-size: 0.9rem;
    }

    &:hover {
        cursor: pointer;

        img {
            transform: scale(1.02);
            overflow: hidden;
            transition: transform .8s ease;
        }
    }
`
interface Color {
    color: string
}

export const CardTextStyle = styled.div<Color>`
    background-color: ${({ color }) => color || '#090d31'};
    color: white;
    padding-left: 1.2rem;
`