import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ light }) => light? 'white':'rgb(41,42,43)'};
    color: ${({light})=>(light? 'black':'white')};
    transition: ${({light})=>(light? '0.50s linear':'')};

  }
  `
