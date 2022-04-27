import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;

    /* color-primary */

    background: ${(props) => props.color ? '#868E96' : '#212529'};
    /* color-primary */

    border: 1.2182px solid ${(props) => props.color ? '#868E96' : '#212529'};
    box-sizing: border-box;
    border-radius: 4.06066px;

    /* Inside auto layout */

    flex: none;
    order: 3;
    flex-grow: 0;
    margin: 17.6477px 0px;

    width: ${(props) => props.color ? '80vw' : ''};
    height: 38.5px;

    color: #F8F9FA;

    

    :hover{
        background: ${(props) => props.color ? '#868E96' : '#212529'};
        border: 1.2182px solid ${(props) => props.color ? '#868E96' : '#212529'};
    }
`