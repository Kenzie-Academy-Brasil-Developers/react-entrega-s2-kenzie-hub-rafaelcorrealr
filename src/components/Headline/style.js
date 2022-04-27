import styled from "styled-components";

export const Container = styled.p`

    color: #868E96;

    //styleName: Headline;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: ${(props) => props.bold ? '700' : '400'};
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    padding:12px;
`