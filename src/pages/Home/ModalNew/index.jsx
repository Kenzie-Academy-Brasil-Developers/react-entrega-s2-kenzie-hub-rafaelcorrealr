import { Modal, Header, Form } from "./style"
import ButtonPrimary from '../../../components/ButtonPrimary'

const ModalNew = () => {
    return (
        <Modal>
            <div class="content">
                <Header>
                    <h3>Cadastrar Tecnologia</h3>
                    <p>X</p>
                </Header>
                <Form>
                    <p>Nome</p>
                    <input placeholder="Nome"/>
                    <p>Selecionar Status</p>
                    <select>
                        <option>Iniciante</option>
                    </select>
                </Form>
                <div>
                    <ButtonPrimary color={false}>Cadastrar Tecnologia</ButtonPrimary>
                </div>
            </div>
        </Modal>
    )
}

export default ModalNew