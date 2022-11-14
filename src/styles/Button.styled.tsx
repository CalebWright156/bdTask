import styled from "styled-components";

export const ButtonStyled = styled.button`
    background: none;
    border: 1px solid black;
    font-family: ${props => props.theme.fontFamily.main};
    padding: 0.5rem 1.5rem;
    margin: 0.5rem 0.5rem;

    &:hover {
        background-color: #53d3ff;
        color: white;
        border-color: #53d3ff;
        cursor: pointer;
    }
`