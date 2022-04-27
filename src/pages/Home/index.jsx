import React from "react";
import { Navbar, ContainerUser, ContainerList } from './style' 

import Headline from "../../components/Headline";
import ButtonDisabled from '../../components/ButtonDisabled'
import ModalNew from "./ModalNew";

import api from "../../sevices/api";
import ModalTech from "./ModalTech";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Home(authenticated, setAuthenticated){

    const [listTechs, setListTechs] = useState([])
    const [dataUser, setDataUser] = useState({})

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('@KenzieHUB:user'))
        
        if(data){
            setListTechs(data.techs)
            setDataUser(data)
        }

    }, [])

    const exitClick = () => {

    }

    const openModalNew = () => {

    }

    if(!authenticated){
        return <Redirect to='/'/>
    }else{
        return (
            <>
                <Navbar>
                    <h1>HOME</h1>
                    <button>Sair</button>
                </Navbar>

                <ContainerUser>
                    <h1>{dataUser.name}</h1>
                    <p>Sua matéria aqui</p>
                </ContainerUser>

                <ContainerList>
                    <div>
                        <h3>Tecnologias</h3>
                        <ButtonDisabled onClick={() => openModalNew()}>+</ButtonDisabled>
                    </div>

                    <ul>
                        {listTechs.map(({title, status}) => {
                            <button>
                            <h3>{title}</h3>
                            <Headline>{status}</Headline>
                        </button>
                        })}
                        <button>
                            <h3>React</h3>
                            <Headline>Intermediário</Headline>
                        </button>
                        <button>
                            <h3>React</h3>
                            <Headline>Intermediário</Headline>
                        </button>
                    </ul>
                </ContainerList>
                {/* <ModalNew/> */}
                {/* <ModalTech/> */}
            </>
        )
    }
}

export default Home