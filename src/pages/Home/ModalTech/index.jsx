import { Modal, Header, Form, DivBtn } from "./style"
import ButtonPrimary from '../../../components/ButtonPrimary'
import ButtonDisabled from "../../../components/ButtonDisabled"
import api from "../../../sevices/api"
import { toast } from 'react-toastify'
import { useState } from "react"

const ModalTech = ({visibilityModalTech, setVisibilityModalTech, idAtual, setIdAtual, listTechs, setListTechs}) => {

    const token = JSON.parse(localStorage.getItem('@KenzieHUB:token'))
    const [user] = useState(
        JSON.parse(localStorage.getItem('@KenzieHUB:user'))
    ) 

    const exitModal = () => {
        setVisibilityModalTech(false)
        setIdAtual('')
    }

    const deleteTech = (idAtual) => {
        console.log(user)
        api
        .delete(`/users/techs/${idAtual}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            toast.success('Tecnologia deletada com sucesso')
            setListTechs(listTechs.filter((item) => {
                return item.id !== idAtual
            }))
        })
        .catch((err) => {
            toast.error('Não foi possível deletar')
            
        })
    }

    return (
        <Modal visibilityModalTech={visibilityModalTech}>
            <div class="content">
                <Header>
                    <h3>Tecnologia Detalhes</h3>
                    <button onClick={() => exitModal()}>X</button>
                </Header>
                <Form>
                    <p>Nome do projeto</p>
                    <input placeholder="Nome"/>
                    <p>Status</p>
                    <select>
                        <option>Iniciante</option>
                    </select>
                </Form>
                <DivBtn>
                    <ButtonPrimary color={false}>Salvar alterações</ButtonPrimary>
                    <ButtonDisabled color={true} onClick={() => deleteTech(idAtual)}>Excluir</ButtonDisabled>
                </DivBtn>
            </div>
        </Modal>
    )
}

export default ModalTech