import {Container} from './style'

const ButtonDisabled = ({ children, color, ...rest}) => {
    return(
        <Container color={color} {...rest}>
            {children}
        </Container>
    )
}

export default ButtonDisabled