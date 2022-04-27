import styled from 'styled-components'

export const Navbar = styled.nav`
    display:flex;
    justify-content: space-around;
`

export const ContainerUser = styled.div`
    display:flex;
    flex-direction: column;


`

export const ContainerList = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    div{
        display:flex;
        justify-content:space-between;

        width:90vw;
    }

    ul{
        display:flex;
        flex-direction: column;
        align-items: center;

        background: #212529;

        width:90vw;

        border-radius: 4.06066px;

        
        padding-bottom: 12px;

    }
    ul{

        button{
            display:flex;
            justify-content: space-between;
            align-items: center;
            
            background: #121214;
            
            border:none;
            border-radius: 4.06066px;

            
            width:95%;
            margin-top:12px;
        
        :hover{
            background:#343B41;
        }
        
        :focus{
            background:#343B41;
        }
        
            h3{
                padding: 12px;
                color: #F8F9FA;
                
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 14.2123px;
                line-height: 24px;
            }
        }
    }
`