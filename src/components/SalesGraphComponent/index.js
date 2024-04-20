import React from 'react'
import { GraphHeaderText } from '../MainMiddleComponent/elements';
import { Chart } from 'react-chartjs-2';


function SalesGraphComponent() {
    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
          {
            label: 'Sales',
            data: [20000, 18000, 16000, 14000, 12000, 10000, 8000, 6000, 4000, 2000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust color as needed
            borderColor: 'rgba(75, 192, 192, 1)', // Adjust color as needed
            borderWidth: 1,
          },
        ],
      };
      
  return (
    <div>
    <GraphHeaderText>Sales Activities</GraphHeaderText>
    <Chart
      type="bar"
      data={salesData}
      options={{
        scales: {
          xAxes: [{
            type: 'category', // Set the x-axis scale type to "category"
            // Other options for customization
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }}
    />
  </div>
  )
}

export default SalesGraphComponent
