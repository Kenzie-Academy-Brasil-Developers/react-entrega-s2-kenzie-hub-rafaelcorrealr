import { Modal, Header, Form, DivBtn } from "./style"
import ButtonPrimary from '../../../components/ButtonPrimary'
import ButtonDisabled from "../../../components/ButtonDisabled"

const ModalTech = () => {
    return (
        <Modal>
            <div class="content">
                <Header>
                    <h3>Tecnologia Detalhes</h3>
                    <p>X</p>
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