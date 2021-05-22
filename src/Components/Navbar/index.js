import React from 'react'
import { NavMenu,WholeContainer,Nav,NavLogo,NavBtn,NavRouter } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../assets/images/logo_cropped.png'
const Navbar = ({ lightTheme }) => {
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }
 
    return (
        <>
        <Nav light={lightTheme}>
            <WholeContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    <img src={logo} width="180" alt="logo"/>
                </NavLogo>
                <NavMenu>
                    <NavBtn>
                        <NavRouter to={{pathname:"/", state:lightTheme}} light={lightTheme} >Data</NavRouter>
                    </NavBtn>
                    <NavBtn>
                        <NavRouter to={{pathname:"/Details",state:lightTheme}}  light={lightTheme} >Details</NavRouter>
                    </NavBtn>
                </NavMenu>
            </WholeContainer>
        =</Nav>
        </>
    )
}

export default Navbar