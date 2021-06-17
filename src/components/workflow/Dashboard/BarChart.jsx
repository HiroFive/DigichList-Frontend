import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { sortDefectsByDate, getMonthsData } from '../RequestHelper';
export default class CustomBarChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      diagramData: [],
    };
  }
  componentDidMount() {
		this._isMounted = true;
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