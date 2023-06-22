import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {

    labels: ['SPY', 'FLMFX', 'IWM', 'FLPSX'],
    datasets: [
        {
            data: [30, 12, 20, 22],
            backgroundColor: [
                '#79d5d5',
                '#3ca6a6',
                '#026773',
                '#abe8e8',
            ],
            borderColor: [
                '#ffffff',
                '#ffffff',
                '#ffffff',
                '#ffffff',
            ],
            borderWidth: 3,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
            callbacks: {
                label: (context) => {
                    const label = context.label || '';

                    if (context.datasetIndex === 0 && context.dataIndex !== undefined) {
                        const value = data.datasets[0].data[context.dataIndex];
                        return `${label}: ${value}%`;
                    }
                    return '';
                },

            },

        },
    },
};

const Portfoliochart = () => {
    return (
        <div className="chart-wrapper">
            <Pie data={data} options={options} />
            <div className="spy">SPY: 30%</div>
            <div className="flmfx">FLMFX: 12%</div>
            <div className="iwm">IWM: 20%</div>
            <div className="flpsx">FLPSX: 22%</div>
        </div>
    );
};

export default Portfoliochart;
