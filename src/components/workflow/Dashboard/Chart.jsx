import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import '../../../styles/workflow/dashboard.scss';
import { sortDefectsByWeek, getWeekData } from '../RequestHelper';


export default class ShowChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      diagramData: [],
    };
  }
  componentDidMount() {
		this._isMounted = true;
    // this.setState({sortedData: sortDefectsByWeek(this.props.data) })
    this.setState({diagramData: getWeekData(sortDefectsByWeek(this.props.data)) })
	}
	componentWillUnMount() {
		this._isMounted = false;
	}

  render() {
    // console.log(this.state.diagramData)
    return (
      <ResponsiveContainer className='chart-container'>
        <LineChart
          className='chartSize'
          width={500}
          data={this.state.diagramData}
          margin={{
            top: 10,
            right: 20,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='open'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey='fixing' stroke='#707C97' />
          <Line type='monotone' dataKey='solved' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
ShowChart.propTypes = {
  data: PropTypes.array,
}