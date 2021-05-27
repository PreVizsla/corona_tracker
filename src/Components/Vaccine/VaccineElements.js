import styled from 'styled-components'

export const Option = styled.option`
    background-color: #fffeee;
    background-color: ${({light})=>(light? '#fffeee':'rgb(65,70,71,0.9)')};
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 #eee;
    border: 1px solid #cecece;
`

export const Container = styled.div`
    margin-left:10%;
    width:80%;
    text-align:center;
    align-items: center;
    flex-direction: column;
    //background-color: red;

    
`
export const Item = styled.div`
    display:flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;

`
export const Icon = styled.div`
    //background-color:green;
    flex:0.4;
    text-align: right;
`
export const Desc = styled.div`

    //background-color:red;
    flex:0.6;
    text-align: left;
    font-size: 18px;
    margin-left:30px;
    font-weight: 500; 
    @media screen and (max-width: 1050px) {
        font-size: 15px;
    }
    @media screen and (max-width: 700px) {
        font-size: 14px;
    }
`
export const Link = styled.a`
    text-decoration:none;
    &:hover {
        color: ${({light})=>(light? 'black':'grey')};
    },
    &:active {
        color: ${({light})=>(light? 'blue':'red')};
    }
`