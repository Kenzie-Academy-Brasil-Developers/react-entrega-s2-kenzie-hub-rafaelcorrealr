import styled from 'styled-components'

export const Navbar = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;

    height: 80px;

    img{
        width: 120px;
        height: 20px;

        margin: 0px 12px;
    }

    button{
        margin: 0px 12px;
    }

    @media only screen and (max-width: 768px){
        justify-content: space-around;
        flex-direction:column;
    }
`

export const ContainerUser = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100vw;
    
    border: 1px solid #212529;
    
    h1{
        padding-top: 35px;
        padding-left: 12px;
    }
    p{
        padding-top: 0px;
        padding-left: 12px;
    }
`

export const ContainerList = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    div{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100vw;

        h3{
            padding-left: 12px;
        }

        button{
            margin-right: 12px;
        }
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