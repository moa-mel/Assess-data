import React from 'react'
import "./styles.css"
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const PieChart = ({title, data, dataKey}) => {
  return (
    <div className="pieChart">
    <h3 className="chartbarTitle"> {title} </h3>
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={400} height={400}>
      <Pie
        dataKey={dataKey}
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
    </div>
  )
}

export default PieChart
