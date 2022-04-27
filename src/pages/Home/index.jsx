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
import { useHistory } from "react-router-dom";


function Home(authenticated, setAuthenticated){

    const [listTechs, setListTechs] = useState([])
    const [dataUser, setDataUser] = useState({})

    const [visibilityModalNew, setVisibilityModalNew] = useState(false)
    const [visibilityModalTech, setVisibilityModalTech] = useState(false)

    const [idAtual, setIdAtual] = useState('')

    const [user] = useState(
        JSON.parse(localStorage.getItem('@KenzieHUB:user'))
    ) 

    const token = JSON.parse(localStorage.getItem('@KenzieHUB:token'))

    useEffect(() => {
        if(user){
            setListTechs(user.techs)
            setDataUser(user)
        }

    }, [])

    const exitClick = () => {
        localStorage.clear()
        setAuthenticated(false)
    }

    const openModalNew = (id) => {
        setVisibilityModalNew(true)
    }

    const openModalTech = (id) => {
        setVisibilityModalTech(true)
        setIdAtual(id)
    }


    const history = useHistory()
    console.log(authenticated)
    if(!token){
        history.push('/')
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
                        {listTechs.map(({title, status, id}) => {
                            return <button onClick={() => openModalTech(id)}>
                                <h3>{title}</h3>
                                <Headline>{status}</Headline>
                            </button>
                            
                        })}
                            {/* {exemplo} */}
                            <button onClick={() => openModalTech()}>
                                <h3>title</h3>
                                <Headline>status</Headline>
                            </button>
                    </ul>
                </ContainerList>

                <ModalNew
                visibilityModalNew={visibilityModalNew}
                setVisibilityModalNew={setVisibilityModalNew}
                setListTechs={setListTechs}
                listTechs={listTechs}
                />
                  <ModalTech
                    visibilityModalTech={visibilityModalTech}
                    setVisibilityModalTech={setVisibilityModalTech}
                    idAtual={idAtual}
                    setIdAtual={setIdAtual}
                    listTechs={listTechs}
                    setListTechs={setListTechs}
                                    />
            </>
        )
    }
}

export default Home