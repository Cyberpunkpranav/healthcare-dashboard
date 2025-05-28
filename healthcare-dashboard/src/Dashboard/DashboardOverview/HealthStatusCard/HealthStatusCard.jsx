// components/ActivityChart.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from '../../../styles/health-status-card.module.css'

ChartJS.register(CategoryScale, LinearScale, BarElement);

const HealthStatusCard = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'option 1',
        data: [35, 30, 25, 30, 22, 35, 28],
        backgroundColor: '#D3D6DC',
        borderRadius: 10,
        barPercentage: 0.3,
        categoryPercentage: 0.7,
      },
      {
        label: 'option 2',
        data: [-30, -25, -20, 0, -20, -30, -25],
        backgroundColor: '#22d9e6',
        borderRadius: 10,
        barPercentage: 0.3,
        categoryPercentage: 0.7,
      },
      {
        label: 'option 3',
        data: [0, 35, 30, -32, 26, 40, 33],
        backgroundColor: '#4A6CF7',
        borderRadius: 10,
        barPercentage: 0.3,
        categoryPercentage: 0.7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    layout:{
        padding:{
            bottom:20
        }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { 
            display: false,
            drawBorder: false 
        },
        border:{
            display:false,
        },
        ticks: { display: false },
      },
      x: {
        stacked:false,
        grid: { 
            display: false,
            drawBorder: false,
            },
        border:{
            display:false,
        },
        ticks: {
          font: { size: 12, family: 'Poppins' },
          padding:0,
          color: '#888',
        },
      },
    },
  };

  return (
      <div className={styles['patient-analytics']}>
      <h4>Activity</h4>
      <Bar data={data} options={options} />
      </div>
  );
};

export default HealthStatusCard;
