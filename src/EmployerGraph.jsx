import React from 'react';
import { Bar } from 'react-chartjs-2';

const EmployerGraph = ({ employer }) => {
  
  const labels = employer.map(employee => employee.name);
  const ages = employer.map(employee => employee.age);

  
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Employee Ages',
        data: ages,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  // Define the chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default EmployerGraph;