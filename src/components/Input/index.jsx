import {Container} from './style'

const Input = ({ children, name, register, ...rest}) => {
    return(
        <Container {...register(name)} {...rest}>
            {children}
        </Container>
    )
}

export default Input