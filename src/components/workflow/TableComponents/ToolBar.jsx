import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import {
	GridToolbarContainer,
	GridFilterToolbarButton,
	GridToolbarExport,
} from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import TableStyle, { TableStyleMake } from '../Defects/TableStyle';
import { withStyles } from '@material-ui/core/styles';
import CustomDialog from '../Dialog/Dialog';

function SelectData(data, selected) {
	const temp = [];
	for (let item of data) {
		for (let itemSelected of selected) {
			if (item.id == itemSelected) {
				temp.push(item);
			}
		}
	}
	return temp;
}
export { SelectData };

function CRUDButtons(props) {
	const classes = TableStyleMake();
	const { title, handleClickOpen, icon, btnIndex, selectedCount, disabled } =
		props;
	return (
		<>
			<Tooltip title={title}>
				<>
					<IconButton
						className={classes.toolIcon}
						aria-label={title}
						disabled={disabled ? selectedCount == 0 : false}
						onClick={(event) => handleClickOpen(btnIndex, event)}
					>
						{icon}
					</IconButton>
				</>
			</Tooltip>
		</>
	);
}

CRUDButtons.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.object.isRequired,
	handleClickOpen: PropTypes.func.isRequired,
	btnIndex: PropTypes.number.isRequired,
	selectedCount: PropTypes.number.isRequired,
	disabled: PropTypes.bool,
};

export { CRUDButtons };

class CustomToolbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data || [],
			numSelected: this.props.numSelected || [],
			open: false,
			modalContent: {},
			buttonCRUDs: this.props.buttonCRUDs || [],
		};
		this.handleClickOpen = this.handleClickOpen.bind(this)
		this.handleSetOpenState = this.handleSetOpenState.bind(this)
	}

	handleClickOpen(dataId) {
		this.setState({open: true})
		this.setState({modalContent: this.state.buttonCRUDs[dataId]})
	}
	handleSetOpenState(val){
		this.setState({open: val})
	}
	render() {
		const { classes } = this.props;
		return (
			<GridToolbarContainer>
				<Grid container spacing={3}>
					<Grid item xs={5} md={9} lg={10}>
						<GridFilterToolbarButton className={classes.toolButton} />
						<GridToolbarExport className={classes.toolButton} />
					</Grid>
					<Grid item xs={7} md={3} lg={2} className={classes.toolGrid}>
						{this.state.buttonCRUDs.map((params, index) => {
							return (
								<span key={index}>
									<CRUDButtons
										title={params.title}
										handleClickOpen={this.handleClickOpen}
										btnIndex={index}
										disabled={params.disabled}
										selectedCount={this.state.numSelected.length}
										icon={params.icon}
									/>
								</span>
							);
						})}
					</Grid>
				</Grid>
				<CustomDialog
					title={this.state.modalContent.title}
					form={this.state.modalContent.content}
					open={this.state.open}
					setOpenState={this.handleSetOpenState}
				/>
			</GridToolbarContainer>
		);
	}
}
CustomToolbar.propTypes = {
	data: PropTypes.array,
	numSelected: PropTypes.array,
	classes: PropTypes.object,
	buttonCRUDs: PropTypes.array,
};

export default withStyles(TableStyle, { withTheme: true })(CustomToolbar); 