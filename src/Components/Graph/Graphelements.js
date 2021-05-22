import styled from 'styled-components'

export const Option = styled.option`
    background-color: #fffeee;
    background-color: ${({light})=>(light? '#fffeee':'rgb(65,70,71,0.9)')};
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 #eee;
    border: 1px solid #cecece;
`