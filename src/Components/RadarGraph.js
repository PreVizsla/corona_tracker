import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarGraph = (props) => {
    return (
        <div 
            style={{
                width: '600px',
                height: '600px',
                margin: '50px auto',
            }}
        >
            <Radar data = {
                {
                    labels: props.label.map(l => l.substring(0,10)),
                    datasets: [
                      {
                        label: '# of Cases',
                        data: props.yAxis,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                      },
                    ],
                  }
            } />
        </div>
    )
}

export default RadarGraph
