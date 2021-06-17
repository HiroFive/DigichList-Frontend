import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { sortDefectsByDate, getMonthsData } from '../RequestHelper';

const data = [
    {
      name: 'Jan.',
      open: 20,
      solved: 34,
    },
    {
      name: 'Feb.',
      open: 10,
      solved: 14,
    },
    {
      name: 'Mar.',
      open: 21,
      solved: 12,
    },
    {
      name: 'Apr.',
      open: 10,
      fixing: 50,
      solved: 31,
    },
    {
      name: 'May.',
      open: 20,
      solved: 1,
    },
    {
      name: 'June',
      open: 28,
      solved: 5,
    },
  ];

export default class CustomBarChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      diagramData: [],
    };
  }
  componentDidMount() {
		this._isMounted = true;
    // this.setState({sortedData: sortDefectsByWeek(this.props.data) })
    this.setState({diagramData: getMonthsData(sortDefectsByDate(this.props.data), 6) })
	}
	componentWillUnMount() {
		this._isMounted = false;
	}

  render() {
    return (
      <ResponsiveContainer className="chart-container">
        <BarChart
          className="chartSize"
          width={500}
          height={300}
          data={this.state.diagramData}
          margin={{
            top: 5,
            right: 20,
            left: -15,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="open" fill="#8884d8" />
          <Bar dataKey="solved" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

CustomBarChart.propTypes = {
  data: PropTypes.array,
}