import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;

    /* color-primary */

    background: #59323F;
    /* color-primary */

    border: 1.2182px solid #59323F;
    box-sizing: border-box;
    border-radius: 4.06066px;

    /* Inside auto layout */

    flex: none;
    order: 3;
    flex-grow: 0;
    margin: 17.6477px 0px;

    width: 80vw;
    height: 38.5px;

    color: #F8F9FA;

    :hover{
        background: ${(props) => props.color ? '#FF577F' : '#FF427F'};
        border: 1.2182px solid ${(props) => props.color ? '#FF577F' : '#FF427F'};
    }
`
