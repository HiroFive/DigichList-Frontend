import React from 'react';
import PropTypes from 'prop-types';
import { FormStyleMake } from '../../auth/Style/FormStyle';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ClearIcon from '@material-ui/icons/Clear';

export const Adornment = (props) => {
	Adornment.propTypes = {
		handleClickShowPassword: PropTypes.func,
		handleClearInput: PropTypes.func,
		value: PropTypes.bool,
	};
	const classes = FormStyleMake();
	return (
		<InputAdornment position='end'>
			<IconButton
				aria-label='toggle password visibility'
				onClick={props.handleClickShowPassword}
			>
				{props.value ? (
					<Visibility className={classes.formControlIcon} />
				) : (
					<VisibilityOff className={classes.formControlIcon} />
				)}
			</IconButton>
			<IconButton
				aria-label='toggle clear password'
				onClick={() => props.handleClearInput()}
			>
				<ClearIcon className={classes.formControlIcon} />
			</IconButton>
		</InputAdornment>
	);
};
