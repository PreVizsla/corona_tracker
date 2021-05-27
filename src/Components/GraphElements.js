import styled from 'styled-components'

export const Container = styled.div`
    width: 600px;
    height: 100%;
    margin: 20px auto;
    color: ${({light})=>(light? 'black': 'white')};
    
    background-color: ${({light})=>(light? '': 'rgb(225, 225, 225)')};

    @media screen and (max-width: 1050px) {

        width: 500px;
    }
`