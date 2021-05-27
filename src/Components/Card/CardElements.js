import styled from 'styled-components'

export const Card = styled.div`
    background-color: ${({light})=>(light? 'rgb(232,232,232)':'rgb(65,70,71,0.9)')};
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 #eee;
    border: 1px solid #cecece;
`