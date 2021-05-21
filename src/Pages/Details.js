import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Graph from '../Components/Graph'
import { NavMenu,WholeContainer,Nav,NavLogo,NavBtn,NavRouter } from '../Components/Navbar/NavbarElements'
import {GlobalStyles} from './GlobalStyle'
import { animateScroll as scroll } from 'react-scroll'
import {useLocation} from 'react-router-dom';
import logo from '../assets/images/logo_cropped.png'
const Details = () => {
    let status;
    let theme;
    if (localStorage){
        theme = localStorage.getItem("theme");
    }
    if(theme=== "light" || theme==="dark"){
        if(theme==="light"){
            status=true;
        }
        else{
            status=false;
        }
    }else{
        localStorage.setItem("theme","light")
        status=true;
    }
    // const [isOpen, setIsOpen] = useState(false)

    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // }
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    const [lightTheme, setTheme] = useState(status);
    const themeToggler = () => {
        if(lightTheme===true){
            localStorage.setItem("theme","dark");
        }else{
            localStorage.setItem("theme","light");
        }
        lightTheme === true ? setTheme(false) : setTheme(true);
        
    }
    return (
        <>  
            <GlobalStyles light={lightTheme}/>
            <Navbar lightTheme={lightTheme}/>
            <Graph></Graph>
            <h1>Details</h1>
            <button onClick={themeToggler} >change</button>
        </>
    )
}

export default Details