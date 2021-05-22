import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'


export const Nav = styled.nav`
    justify-content: center;
    display: flex;
    position: sticky;
    height: 125px;
    align-items: center;
    
    z-index: 10;
    top: 0;
    left:0;
    right:0;
    background: ${({light})=>(light? 'rgba(230,230,230, 0.9)':'rgb(65,70,71,0.9)')};
    transition: all 0.50s linear;
`

export const WholeContainer = styled.div`
    display: flex;
    z-index: 1;
    //dividing elements to right and left
    justify-content: space-between;
    //background: black;
    height: 100px;
    padding: 0 24px;
    width: 100%;
    max-width: 1500px;
`

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: -20px;
`

export const NavRouter = styled(LinkR)`
    //router style
    border-radius: 50px;
    white-space: nowrap;
    padding: 20px 22px;
    
    //text style
    color: ${({light})=>(light? 'black':'white')};
    font-size: 25px;
    font-weight: 700;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        
        color: black;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 24px;

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

`