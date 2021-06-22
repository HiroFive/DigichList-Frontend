import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import { TableStyleMake } from '../Defects/TableStyle';

function SelectData(data, selected) {
	const temp = [];
    const secondTemp = []
	for (let item of data) {
		for (let itemSelected of selected) {
			if (item.id == itemSelected) {
				temp.push(item);
			}
		}
	}
    // console.log(secondTemp)
	// for (let i = 0; i < data.length; i++) {
	// 	for (let j = 0; j < selected.length; j++) {
	// 		if (data[i].id == selected[j]) {
	// 			temp.push(data[i]);
	// 		}
	// 	}
	// }
    // console.log(temp)
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
