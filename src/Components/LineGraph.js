import React from 'react'
import { Line } from 'react-chartjs-2'
import { Container } from './GraphElements'
const LineGraph = (props) => {
    return (
        <Container light={props.Theme}>
            <Line data = {
                {
                    labels: props.label.map(l => l.substring(0,10)),
                    datasets: [
                      {
                        label: '# of Cases',
                        data: props.yAxis,
                        fill: true,
                        backgroundColor: props.Theme? 'rgb(255, 99, 132, 0.4)' : 'rgb(65,70,71,0.9)',
                        borderColor: props.Theme? 'rgba(255, 99, 132, 0.2)' : 'black',
                        color: props.Theme? 'black': 'white',
                    },
                    ]
                  }
            } />
        </Container>
    )
}

export default LineGraph
