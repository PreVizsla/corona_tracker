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
    margin-left:auto;
    margin-right:auto;
    width:600px;
    text-align:center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 1050px) {

        width: 50%;
    }
    > h1 {
        font-size: 32px;
        @media screen and (max-width: 1050px) {
            font-size: 31px;
        }
    }
    > h3 {
        font-size: 18px;
        @media screen and (max-width: 1050px) {
            font-size: 17px;
        }
    }
`
export const Item = styled.div`
    display:flex;
    align-items: center;
    flex-direction: row;

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
    margin-left:20px;
    font-weight: 500;

    @media screen and (max-width: 1050px) {
        font-size: 16px;
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
export const Sections = styled.div`
    display:flex;
    align-items: center;
    flex-direction: row;
    // background-color:red;
    margin-left: ;
    justify-content: space-between;
    text-align:center;
`