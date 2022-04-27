import { Modal, Header, Form } from "./style"
import ButtonPrimary from '../../../components/ButtonPrimary'

import api from '../../../sevices/api'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../../components/Input'

import { toast } from 'react-toastify'

const ModalNew = ({visibilityModalNew, setVisibilityModalNew}) => {


    const formSchema = yup.object().shape({
        title: yup.string().required("Nome obrigatório"),
    });

    const { register, handleSubmit, formState: {errors}
} = useForm({
    resolver: yupResolver(formSchema)})


const onSubmitFunction = (data) => {
    console.log(data)
        api
        .post('/users/techs', data)
        .then((response) => {
            toast.success('Tecnologia cadastrada com sucesso')
            console.log(response)
        })
        .catch((err) => {
            toast.error('Não foi possível efetuar o cadastro')
            console.log(err)})
    }

const exitModal = () => {
    setVisibilityModalNew(false)
}

    return (
        <Modal visibilityModalNew={visibilityModalNew}>
            <div class="content">
                <Header>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={() => exitModal()}>X</button>
                </Header>
                <Form onSubmit={() => {handleSubmit(onSubmitFunction)}}>
                    <p>Nome</p>
                    <Input
                    placeholder="Nome da tecnologia"
                    register={register}
                    name='title'
                    />
                    <legend>{errors.title?.message}</legend>
                    <p>Selecionar Status</p>
                    <select {...register('status')}>
                        <option value={'Iniciante'}>Iniciante</option>
                        <option value={'Intermediário'}>Intermediário</option>
                        <option value={'Avançado'}>Avançado</option>
                        
                    </select>
                    <ButtonPrimary color={false}>Cadastrar Tecnologia</ButtonPrimary>
                
                </Form>
            </div>
        </Modal>
    )
}

export default ModalNew