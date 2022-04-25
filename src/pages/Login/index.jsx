import React from "react";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";

import {Container, ContainerForm, Form} from './style'
import {Input} from '../../styles/Input'
import {ButtonPrimary} from '../../components/ButtonPrimary/style'
import {ButtonDisabled} from '../../components/ButtonDisabled/style'
 

function Login(){

    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório"),
        password: yup.string().required('Senha errada.')
    });

    const { register, handleSubmit, formState: {errors}
} = useForm({
    resolver: yupResolver(formSchema)})
    
    const onSubmitFunction = (data) => {
        console.log(data)
    }
    return (
        <Container>
            <div>
                <h1>Kenzie Hub</h1>
            </div>

            <ContainerForm>
                <h2>Login</h2>
                <Form onSubmit={handleSubmit(onSubmitFunction)}>
                    <p>Email</p>
                    <Input placeholder="Email" {...register('email')}/>
                    {errors.email?.message}
                    <p>Senha</p>
                    <Input placeholder="Senha" type='password' {...register('password')}/>
                    {errors.password?.message}
                    <ButtonPrimary type="submit">Entrar</ButtonPrimary>
                </Form>

                <p>Ainda não possui uma conta?</p>
                <Link to={'/register'}><ButtonDisabled>Cadastre-se</ButtonDisabled></Link>
            </ContainerForm>
        </Container>
    )
}

export default Login