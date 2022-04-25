import React from "react";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";

import { Container, ContainerForm, Form, Select} from './style'
import { Input } from "../../styles/Input";
import { ButtonPrimary } from '../../components/ButtonPrimary/style'
import { ButtonDisabled } from '../../components/ButtonDisabled/style'

function Register(){

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("email obrigatório"),
        password: yup.string().required('Senha errada.'),
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
                <Link to={'/'}><button>Voltar</button></Link>
            </div>

            <ContainerForm>
                <h2>Crie sua conta</h2>
                <p>Rapido e grátis, vamos nessa</p>
                <Form onSubmit={handleSubmit(onSubmitFunction)}>
                    <p>Nome</p>
                    <Input placeholder="Nome" {...register('name')}/>
                    {errors.name?.message}
                    <p>Email</p>
                    <Input placeholder="Email" {...register('email')}/>
                    {errors.email?.message}
                    <p>Senha</p>
                    <Input placeholder="Senha" type='password' {...register('password')}/>
                    {errors.password?.message}
                    <p>Confirme senha</p>
                    <Input placeholder="Confirme senha" type='password' {...register('password')}/>
                    {errors.password?.message}
                    <p>Selecionar módulo</p>
                    <Select {...register('course_module')}>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
                    </Select>
                    <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default Register