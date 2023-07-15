import React from 'react'
import './styles.css'
import { LineChart, Line, XAxis,YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart ({title, data, dataKey, grid}){

    return(
        <div className="chart">
          <h3 className="chartTitle"> {title} </h3>
          <ResponsiveContainer width="100%" height="100%">
             <LineChart 
             width={500}
          height={900}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} >
            <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
         {/* <Legend /> */}
          <Line height={900} dataKey="uvv" stackId="a" fill="#8884d8" />
             </LineChart>
          </ResponsiveContainer>
        </div>
    )
}