import { createGlobalStyle} from "styled-components"
import styled from 'styled-components'
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ light }) => light? 'white':'rgb(41,42,43)'};
    color: ${({light})=>(light? 'black':'white')};
    transition: ${({light})=>(light? '0.50s linear':'')};

  }
  `

export const Container = styled.div`
  margin-left:10%;
  width: 80%;
  //background: ${({light})=>(light? '':'rgb(11,12,23)')};



`