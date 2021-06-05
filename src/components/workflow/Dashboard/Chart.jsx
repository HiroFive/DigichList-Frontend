import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../../../styles/workflow/dashboard.scss";


const data = [
  {
    name: 'Mon.',
    open: 20,
    fixing: 20,
    solved: 34,
  },
  {
    name: 'Tue.',
    open: 10,
    fixing: 25,
    solved: 14,
  },
  {
    name: 'Wed.',
    open: 21,
    fixing: 23,
    solved: 12,
  },
  {
    name: 'Thu.',
    open: 10,
    fixing: 50,
    solved: 31,
  },
  {
    name: 'Fri.',
    open: 20,
    fixing: 5,
    solved: 1,
  },
  {
    name: 'Sat.',
    open: 28,
    fixing: 26,
    solved: 5,
  },
  {
    name: 'Sun.',
    open: 28,
    fixing: 12,
    solved: 4,
  },
];



export default class ShowChart extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
    }
  }

  render() {
    return (
      <ResponsiveContainer className="chart-container">
        <LineChart
          className="chartSize"
          width={500}
        
          data={this.state.data}
          margin={{
            top: 10,
            right: 20,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="open" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="fixing" stroke="#707C97" />
          <Line type="monotone" dataKey="solved" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
