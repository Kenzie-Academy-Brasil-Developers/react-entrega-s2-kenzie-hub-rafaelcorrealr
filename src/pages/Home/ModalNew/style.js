import styled from 'styled-components'

export const Modal = styled.div`
    visibility: ${(props) => props.visibilityModalNew ? 'visible' : 'hidden'};

    position: fixed;
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);

    .content {
    background-color: #212529;
    margin: 50% auto; 
    width: 90vw; 

    display: flex;
    flex-direction: column;
    align-items: center;
    
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
}
`

export const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;

    background: #343B41;

    width: 90vw;
    height: 40px;

    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    h3, p{
        padding: 0px 12px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width:100%;

    p{
        padding:12px
    }
    input{
        background: #343B41;

        padding: 0px 13.0293px;
        margin: 0px 13px;

        border: 0.9772px solid #F8F9FA;
        box-sizing: border-box;
        border-radius: 3.20867px;

        height: 38.5px;

        width: 80vw;

        
        ::placeholder{
            color: #F8F9FA;

        }
    }
    select{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 13.0293px;
        margin: 0px 13px;
        /* grey-2 */

        background: #343B41;
        /* grey-0 */

        border: 0.9772px solid #F8F9FA;
        box-sizing: border-box;
        border-radius: 3.20867px;
        

        /* Inside auto layout */
        width: 80vw;
        height: 38.5px;

        color: #F8F9FA;
    }
`