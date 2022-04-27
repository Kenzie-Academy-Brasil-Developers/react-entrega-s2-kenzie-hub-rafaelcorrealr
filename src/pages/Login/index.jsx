import React from "react";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";

import api from '../../sevices/api'
import {Container, ContainerForm} from './style'
import Input from '../../components/Input'

import ButtonDisabled from '../../components/ButtonDisabled'
import ButtonPrimary from "../../components/ButtonPrimary";
import Headline from "../../components/Headline/";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import logo from '../../images/logo.png'

function Login({authenticated, setAuthenticated}){

    const history = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string().email('Email inválido').required("Email obrigatório"),
        password: yup.string().required('Senha errada.')
    });

    const { register, handleSubmit, formState: {errors}
} = useForm({
    resolver: yupResolver(formSchema)})
    
    const onSubmitFunction = (data) => {
        api
        .post('/sessions', data)
        .then((response) => {
            const { token } = response.data
            localStorage.setItem("@KenzieHUB:token", JSON.stringify(token))
            localStorage.setItem("@KenzieHUB:user", JSON.stringify(response.data.user))
    
            return history.push(`/home/${response.data.user.id}`)
        })
        .catch((err) => console.log(err))
    }

    return (
        <Container>
            <div>
                <img src={logo} alt='logo'/>
            </div>
            
            <ContainerForm>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <p>Email</p>
                    <Input
                    placeholder="Email"
                    register={register}
                    name='email'/>
                    <legend>{errors.email?.message}</legend>
                    <p>Senha</p>
                    <Input
                    placeholder="Senha"
                    type='password'
                    register={register}
                    name='password'/>
                    <legend>{errors.password?.message}</legend>
                    <ButtonPrimary color={false}>Entrar</ButtonPrimary>
                </form>

                <Headline>Ainda não possui uma conta?</Headline>
                <Link to={'/register'}><ButtonDisabled color={true}>Cadastre-se</ButtonDisabled></Link>
            </ContainerForm>
        </Container>
    )
}

export default Login