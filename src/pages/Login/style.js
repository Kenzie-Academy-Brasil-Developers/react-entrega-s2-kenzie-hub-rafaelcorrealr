import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    height: 100vh;
`;

export const ContainerForm = styled.div`
    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 33.6911px 17.6477px;

    width: 80vw;
    overflow-y: scroll;

    /* grey-3 */

    background: #212529;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;


    legend{
        font-family: 'Inter';
        font-size: 12px;
        font-style: italic;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;

        color: #FF577F;
    }

    @media(min-width: 768px){
        overflow-y: auto;

        max-width: 369px;

        button, input{
            max-width: 324px;
            cursor: pointer;
        }
    }
`

