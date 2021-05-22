import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarGraph = (props) => {
    return (
        <div 
            style={{
                width: '600px',
                height: '600px',
                margin: '50px auto',
                color: props.Theme? 'black': 'white',
                backgroundColor: props.Theme? '': 'rgb(225, 225, 225)',
            }}
        >
            <Radar data = {
                {
                    labels: props.label.map(l => l.substring(0,10)),
                    datasets: [
                      {
                        label: '# of Cases',
                        data: props.yAxis,
                        backgroundColor: props.Theme? 'rgb(255, 99, 132, 0.4)' : 'rgb(65,70,71,0.9)',
                        borderColor: props.Theme? 'rgba(255, 99, 132, 0.2)' : 'black',
                        color: props.Theme? 'black': 'white',
                        borderWidth: 1,
                      },
                    ],
                  }
            } />
        </div>
    )
}

export default RadarGraph
