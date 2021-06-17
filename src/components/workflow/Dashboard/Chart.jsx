import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
	AreaChart,
	Area,
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
		this.setState({
			diagramData: getWeekData(sortDefectsByWeek(this.props.data)),
		});
	}
	componentWillUnMount() {
		this._isMounted = false;
	}

	render() {
		// console.log(this.state.diagramData)
		return (
			<ResponsiveContainer className='chart-container'>
				<AreaChart
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
					<defs>
						<linearGradient id='colorOv' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='20%' stopColor='#8884d8' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#8884d8' stopOpacity={0.1} />
						</linearGradient>
						<linearGradient id='colorFv' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='20%' stopColor='#707C97' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#707C97' stopOpacity={0.1} />
						</linearGradient>
            <linearGradient id='colorSv' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='20%' stopColor='#82ca9d' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#82ca9d' stopOpacity={0.1} />
						</linearGradient>
					</defs>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Area
						type='monotone'
						dataKey='open'
						stroke='#8884d8'
						fill='url(#colorOv)'
						fillOpacity={1}
					/>
					<Area
						type='monotone'
						dataKey='fixing'
						stroke='#707C97'
						fill='url(#colorFv)'
						fillOpacity={1}
					/>
					<Area
						type='monotone'
						dataKey='solved'
						stroke='#82ca9d'
						fillOpacity={1}
						fill="url(#colorSv)"
						// activeDot={{ r: 8 }}
					/>
				</AreaChart>
			</ResponsiveContainer>
		);
	}
}
ShowChart.propTypes = {
	data: PropTypes.array,
};
