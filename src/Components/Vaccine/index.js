import React from 'react'
import { Container,Item, Icon, Desc, Link } from './VaccineElements'
import Pfizer from '../../assets/images/pfizer.png'
import AstraZeneca from '../../assets/images/AstraZeneca.png'
import SIofIndia from '../../assets/images/serum-institute-of-india.jpg'
import Janssen from '../../assets/images/Janssen.png'
import Moderna from '../../assets/images/Moderna.jpg'
import Sinopharm from '../../assets/images/Sinopharm.jpg'
import Sinovac from '../../assets/images/Sinovac.jpg'
const Vaccine = ({  lightTheme }) => {
    

 
    return (
        <>
            <Container>
                <h1>WHO Approved Vaccine</h1>
                <Item>
                    <Icon><img src={Pfizer} width="100" alt="Pfizer"/></Icon>
                    <Desc>
                        Company: Pfizer
                        <br/>
                        Vaccine Name: BNT162b2/COMIRNATY Tozinameran (INN)
                        </Desc>    
                </Item>
                <Item>
                    <Icon><img src={AstraZeneca} width="100" alt="AstraZeneca"/></Icon>
                    <Desc>Company: AstraZeneca
                        <br/>
                        Vaccine Name: AZD1222</Desc>
                </Item>
                <Item>
                    <Icon><img src={SIofIndia} width="100" alt="SIofIndia"/></Icon>
                    <Desc>Company: Serum Institute of India Private Limited
                        <br/>
                        Vaccine Name: Covishield (ChAdOx1_nCoV-19)</Desc>
                </Item>
                <Item>
                    <Icon><img src={Janssen} width="100" alt="Janssen"/></Icon>
                    <Desc>Company: Janssen
                        <br/>
                        Vaccine Name: Ad26.COV2.S</Desc>
                </Item>
                <Item>
                    <Icon><img src={Moderna} width="100" alt="Moderna"/></Icon>
                    <Desc>Company: Moderna
                        <br/>
                        Vaccine Name: mRNA-1273</Desc>
                </Item>
                <Item>
                    <Icon><img src={Sinopharm} width="100" alt="Sinopharm"/></Icon>
                    <Desc>Company: Sinopharm
                        <br/>
                        Vaccine Name: SARS-CoV-2 Vaccine (Vero Cell), Inactivated (lnCoV)</Desc>
                </Item>
                <Item>
                    <Icon><img src={Sinovac} width="100" alt="Sinovac"/></Icon>
                    <Desc>Company: Sinovac
                        <br/>
                        Vaccine Name: SARS-CoV-2 Vaccine (Vero Cell), Inactivated</Desc>
                </Item>
                <p style={{fontWeight:500}}>Check the full list <Link light={lightTheme} target="blank"href="https://extranet.who.int/pqweb/sites/default/files/documents/Status_COVID_VAX_18May2021.pdf">here</Link></p> 
            </Container>
        </>
    )
}

export default Vaccine