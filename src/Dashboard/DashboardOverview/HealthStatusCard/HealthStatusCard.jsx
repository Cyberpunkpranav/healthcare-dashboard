// components/ActivityChart.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { color } from 'chart.js/helpers';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

const HealthStatusCard = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Gray',
        data: [35, 30, 25, 30, 22, 35, 28],
        backgroundColor: '#D3D6DC',
        borderRadius: 10,
        barPercentage: 0.3,
        categoryPercentage: 0.7,
      },
      {
        label: 'Light Green',
        data: [-30, -25, -20, 0, -20, -30, -25],
        backgroundColor: '#22d9e6',
        borderRadius: 10,
        barPercentage: 0.3,
        categoryPercentage: 0.7,
      },
      {
        label: 'Blue',
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
      <Bar data={data} options={options} />
  );
};

export default HealthStatusCard;
