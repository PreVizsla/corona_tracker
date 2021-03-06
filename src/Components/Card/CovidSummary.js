import React from 'react'
import {Card} from './CardElements'
import CountUp from 'react-countup';

const CovidSummary = (props) => {
    
    const {
        confirmedCases,
        recoveredCases,
        deaths,
        country,
    } = props;

    return (
        <div>
            <div>
                <h1 style={{textTransform: 'capitalize'}}>{country === ''? ' Global Covid-19 Statistics' : country}</h1>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                <Card light={props.Theme}>
                    <span>Cases</span><br />
                    <span>{<CountUp
                            start={0}
                            end={confirmedCases}
                            duration={0.5}
                            separator=","/>}</span>
                </Card>
                <Card light={props.Theme}>
                    <span>Recovered</span><br />
                    <span>{<CountUp
                            start={0}
                            end={recoveredCases}
                            duration={0.5}
                            separator=","/>}</span>
                </Card>
                <Card light={props.Theme}>
                    <span>Deaths</span><br />
                    <span>{<CountUp
                            start={0}
                            end={deaths}
                            duration={0.5}
                            separator=","/>}</span>
                </Card>
            </div>
        </div>
        </div>
    )
}

export default CovidSummary
