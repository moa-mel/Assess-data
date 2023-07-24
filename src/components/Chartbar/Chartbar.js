import React from 'react'
import "./styles.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chartbar = ({title, data, dataKey}) => {
  return (
    <div className="chartbar">
    <h3 className="chartbarTitle"> {title} </h3>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
        data={data}
        >
    <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey} fill="#8884d8" />
          <Bar dataKey={dataKey} fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chartbar
