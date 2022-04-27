import React from "react";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";

import { Container, ContainerForm, Form, Select} from './style'
import Input from '../../components/Input'
import ButtonDisabled  from '../../components/ButtonDisabled/'
import Headline from "../../components/Headline/";
import { toast } from 'react-toastify'

import api from "../../sevices/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Register(){

    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string()
        .required("Nome obrigatório"),
        email: yup.string()
        .email('Email inválido')
        .required("Email obrigatório"),
        password: yup.string()
        .min(6, 'minimo 6 digitos')
        .required('Senha obrigatório'),
        passwordConfirm: yup.string()
        .oneOf([yup.ref('password')], 'senhas diferentes')
        .required('Confirma senha obrigatório'),
    });

    const { register, handleSubmit, formState: {errors}
} = useForm({
    resolver: yupResolver(formSchema)})
    
    const onSubmitFunction = ({name,
         email, 
         password, 
         course_module, 
         bio='Lorem ipsum dolor emet', 
         contact='linkedin'}) => {
        
        const data = {name, email, password, course_module, bio, contact}
        console.log(data)

        api
        .post('/users', data)
        .then((_) => {
            toast.success('Cadastro realizado com sucesso')
            return history.push('/')
        })
        .catch((err) => {
            toast.error('Não foi possível efetuar o cadastro')
        })
    }

    return (
        <Container>
            <div>
                <h1>Kenzie Hub</h1>
                <Link to={'/'}><ButtonDisabled color={false}>Voltar</ButtonDisabled></Link>
            </div>

            <ContainerForm>
                <h1>Crie sua conta</h1>
                <Headline bold={false}>Rápido e grátis, vamos nessa</Headline>
                <Form onSubmit={handleSubmit(onSubmitFunction)}>
                    <p>Nome</p>
                    <Input
                    placeholder="Nome"
                    register={register}
                    name='name'/>
                    <legend>{errors.name?.message}</legend>
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
                    <p>Confirme senha</p>
                    <Input
                    placeholder="Confirme senha"
                    type='password'
                    register={register}
                    name='passwordConfirm'/>
                    <legend>{errors.passwordConfirm?.message}</legend>
                    <p>Selecionar módulo</p>
                    <Select {...register('course_module')}>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
                    </Select>
                    <ButtonDisabled type="submit" color={true}>Cadastrar</ButtonDisabled>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default Register