import {Container} from './style'

const ButtonPrimary = ({ children, color, ...rest}) => {
    return(
        <Container color={color} type='submit' {...rest}>
            {children}
        </Container>
    )
}

export default ButtonPrimary