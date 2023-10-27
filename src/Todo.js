import React from 'react';
import './Todo.css'
import { Bar } from 'react-chartjs-2';
import 'chart.js'


function Todo(props) {

  


  const employer = [
    {
      "id": 1,
      "name": "John",
      "designation": "Manager",
      "age": 35
    },
    {
      "id": 2,
      "name": "Jane",
      "designation": "Developer",
      "age": 28
    },
    {
      "id": 3,
      "name": "Mark",
      "designation": "Manager",
      "age": 42
    },
    {
      "id": 4,
      "name": "Kerry",
      "designation": "Designer",
      "age": 30
    }
  ]

  const labels = employer?.map(employee => employee.name)
  const ages = employer?.map(employee => employee.age)


  const employerData = {
    labels: labels,
    datasets: [
      {
        label: "Employee Ages",
        data: ages,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
     
      yAxes: [
        {
          ticks: {
            // The y-axis value will start from zero
            beginAtZero: true,
          },
        },
      ],
    },
  };


  return (
    <div className="container">
      <div className='card'>
        <h2 className='card-title text-center'>Register</h2>
        {employer.map((item, index) => {
          return (
            <div>
              <p>ID:{" "}{item.id}</p>
              <p>NAME:{" "}{item.name}</p>
              <p>DESIGNATION:{" "}{item.designation}</p>
              <p>AGE:{" "}{item.age}</p>

              <div>
        <h1>Employee Data Graph</h1>
        <Bar  data={employerData}   options={options} />
      </div>
            </div>
            
          )
        })}
      </div>
      

    </div>
  );
}

export default Todo;