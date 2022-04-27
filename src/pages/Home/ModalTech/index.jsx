import { Modal, Header, Form, DivBtn } from "./style"
import ButtonPrimary from '../../../components/ButtonPrimary'
import ButtonDisabled from "../../../components/ButtonDisabled"

const ModalTech = (visibilityModalTech, setVisibilityModalTech) => {

    const exitModal = () => {
        setVisibilityModalTech(false)
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
                    <ButtonPrimary color={false}>Cadastrar Tecnologia</ButtonPrimary>
                    <ButtonDisabled color={true}>Excluir</ButtonDisabled>
                </DivBtn>
            </div>
        </Modal>
    )
}

export default ModalTech