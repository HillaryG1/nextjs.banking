"use client"
// Import components from chart.js and react-chartjs-2
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import { Doughnut } from "react-chartjs-2";
// Register necessary chart elements for ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);


// Define the DoughnutChart component with destructured props
const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    // Define the data for the doughnut chart
  const data = {
    datasets: [
      {
        label: 'Banks',
                // Example data values for demonstration
        data: [1250, 2500, 3750],
                // Background colors for the doughnut segments
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
        // Labels for the doughnut segments
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
  }
    // Render the Doughnut component with provided data and options
  return <Doughnut 
    data={data} 
    options={{cutout: '60%',
    plugins: {
      legend: {
        display: false
      }
    }
  
  }}
  />
}

export default DoughnutChart
