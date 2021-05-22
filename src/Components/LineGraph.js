import React from 'react'
import { Line } from 'react-chartjs-2'

const LineGraph = (props) => {
    return (
        <div 
            style={{
                width: '600px',
                height: '600px',
                margin: '50px auto',
                color: props.Theme? 'black': 'white',
            }}
        >
            <Line data = {
                {
                    labels: props.label.map(l => l.substring(0,10)),
                    datasets: [
                      {
                        label: '# of Cases',
                        data: props.yAxis,
                        fill: true,
                        backgroundColor: props.Theme? 'rgb(255, 99, 132, 0.4)' : 'rgb(65,70,71,0.9)',
                        borderColor: props.Theme? 'rgba(255, 99, 132, 0.2)' : 'white',
                      },
                    ],
                  }
            } />
        </div>
    )
}

export default LineGraph
