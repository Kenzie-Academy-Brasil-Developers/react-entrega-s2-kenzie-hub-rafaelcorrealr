import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    height: 100vh;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80vw;

        button{
            cursor: pointer;
        }
        @media(min-width: 768px){
            max-width: 369px;
        }
    }
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

        button, input, select{
            max-width: 324px;
            cursor: pointer;
        }
    }

`
export const Select = styled.select`
    /* Auto layout */   

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 13.0293px;

    /* grey-2 */

    background: #343B41;
    /* grey-0 */

    border: none;
    box-sizing: border-box;
    border-radius: 3.20867px;

    /* Inside auto layout */
    width: 100%;
    height: 38.5px;

    color: #868E96;

`