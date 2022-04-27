import React from "react";
import { Navbar, ContainerUser, ContainerList } from './style' 

import Headline from "../../components/Headline";
import ButtonDisabled from '../../components/ButtonDisabled'

import ModalNew from "./ModalNew";
import ModalTech from "./ModalTech";

import api from "../../sevices/api";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import logo from '../../images/logo.png'

function Home(authenticated, setAuthenticated){

    const [listTechs, setListTechs] = useState([])
    const [dataUser, setDataUser] = useState({})

    const [visibilityModalNew, setVisibilityModalNew] = useState(false)
    const [visibilityModalTech, setVisibilityModalTech] = useState(false)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('@KenzieHUB:user'))
        
        if(data){
            setListTechs(data.techs)
            setDataUser(data)
        }

    }, [])

    const exitClick = () => {
        localStorage.clear()
        setAuthenticated(true)
    }

    const openModalNew = () => {
        setVisibilityModalNew(true)
        setVisibilityModalTech(true)
    }

    const openModalTech = () => {
        setVisibilityModalTech(true)
    }




    if(!authenticated){
        return <Redirect to='/'/>
    }else{
        return (
            <>
                <Navbar>
                    <img src={logo} alt='logo'/>
                    <ButtonDisabled color={false} onClick={() => exitClick()}>Sair</ButtonDisabled>
                </Navbar>

                <ContainerUser>
                    <h1>{dataUser.name}</h1>
                    <Headline>{dataUser.course_module}</Headline>
                </ContainerUser>

                <ContainerList>
                    <div>
                        <h3>Tecnologias</h3>
                        <ButtonDisabled onClick={() => openModalNew()}>+</ButtonDisabled>
                    </div>

                    <ul>
                        {listTechs.map(({title, status}) => {
                            <button onClick={() => openModalTech()}>
                                <h3>{title}</h3>
                                <Headline>{status}</Headline>
                            </button>
                        })}
                            <button onClick={() => openModalTech()}>
                                <h3>title</h3>
                                <Headline>status</Headline>
                            </button>
                    </ul>
                </ContainerList>

                <ModalNew
                visibilityModalNew={visibilityModalNew}
                setVisibilityModalNew={setVisibilityModalNew}
                />
                <ModalTech
                visibilityModalTech={visibilityModalTech}
                setVisibilityModalTech={setVisibilityModalTech}
                />
            </>
        )
    }
}

export default Home