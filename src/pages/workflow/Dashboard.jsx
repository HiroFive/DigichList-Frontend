import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import WorkflowStyle from '../../components/workflow/WorkflowStyle';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import LinearProgress from '@material-ui/core/LinearProgress';

import ShowChart from '../../components/workflow/Dashboard/Chart';
import DefectTable from '../../components/workflow/Dashboard/DefectTale';
import BarChart from '../../components/workflow/Dashboard/BarChart';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			defectsData: [],
			loading: true,
		};
	}
	componentDidMount() {
		this._isMounted = true;
		axios
			.get(`https://digichlistbackend.herokuapp.com/api/defect`)
			.then((res) => {
				const defect = res.data;
				this.setState({ defectsData: defect });
				this.setState({ loading: false });
			});
	}
	componentWillUnMount() {
		this._isMounted = false;
	}
	render() {
		const { classes } = this.props;
		const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
		return (
			<Grid container spacing={3}>
				<Grid item xs={12} md={8} lg={8}>
					<Paper className={fixedHeightPaper}>
						{!this.state.loading ? (
							<ShowChart data={this.state.defectsData} />
						) : (
							<div className='chart-container'>
								<LinearProgress className={classes.loadingLinearProgress} />
							</div>
						)}
					</Paper>
				</Grid>
				<Grid item xs={12} md={4} lg={4}>
					<Paper className={fixedHeightPaper}>
					{!this.state.loading ? (
							<BarChart data={this.state.defectsData} />
						) : (
							<div className='chart-container'>
								<LinearProgress className={classes.loadingLinearProgress} />
							</div>
						)}
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Grid item xs={12} md={4} lg={12}>
							{!this.state.loading ? (
								<DefectTable data={this.state.defectsData} />
							) : (
								<div className='chart-container'>
									<LinearProgress className={classes.loadingLinearProgress} />
								</div>
							)}
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}
Dashboard.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(WorkflowStyle, { withTheme: true })(Dashboard);
