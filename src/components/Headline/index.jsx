import {Container} from './style'

const Headline = ({ children, bold, ...rest}) => {
    return(
        <Container bold={bold} {...rest}>
            {children}
        </Container>
    )
}

export default Headline