import React from 'react'
import { Container,Item, Icon, Desc, Link, Sections } from './SympthomsElements'
import Fever from '../../assets/images/Fever.png'
import cough from '../../assets/images/cough.png'
import fatigue from '../../assets/images/fatigue.png'
import breath from '../../assets/images/short_breathing.png'
import appetite from '../../assets/images/lack-of-appetite.png'
import chest from '../../assets/images/chest-pain-or-pressure.png'

const Sympthoms = ({  lightTheme }) => {
    

 
    return (
        <div >
            <Container>
                <h1>Covid-19 Symptoms</h1>
                <Sections>
                    <div>
                        <h3>Most Common Symptoms</h3>
                        <Item>
                            <Icon><img src={Fever} width="50" alt="fever"/></Icon>
                            <Desc>Fever</Desc>    
                        </Item>
                        <Item>
                            <Icon><img src={cough} width="50" alt="cough"/></Icon>
                            <Desc>Dry Cough</Desc>
                        </Item>
                        <Item>
                            <Icon><img src={fatigue} width="50" alt="fatigue"/></Icon>
                            <Desc>Fatigue</Desc>
                        </Item>
                    </div>
                    <div>
                        <h3>Severe Symptoms</h3>
                        <Item>
                            <Icon><img src={breath} width="50" alt="breadth"/></Icon>
                            <Desc>Shortness of breadth</Desc>
                        </Item>
                        <Item>
                            <Icon><img src={appetite} width="50" alt="appetite"/></Icon>
                            <Desc>Lack of appetite</Desc>
                        </Item>
                        <Item>
                            <Icon><img src={chest} width="50" alt="chest"/></Icon>
                            <Desc>Persistent chest pain or pressure</Desc>
                        </Item>
                    </div>
                </Sections>
                <p style={{fontWeight:500}}>Check more details <Link light={lightTheme} target="blank"href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/coronavirus-disease-answers?gclid=CjwKCAjw-qeFBhAsEiwA2G7Nl7EIvvRjDvbb2KIx7pG3DPYwj-KGgDPOSKd0dSIStl7OdfYtYB3UCBoCzV0QAvD_BwE&query=symptoms+of+covid+19&referrerPageUrl=https%3A%2F%2Fwww.who.int%2Femergencies%2Fdiseases%2Fnovel-coronavirus-2019%2Fcoronavirus-disease-answers">here</Link></p> 
            </Container>
        </div>
    )
}

export default Sympthoms