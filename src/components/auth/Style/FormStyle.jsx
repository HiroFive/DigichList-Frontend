import { makeStyles } from '@material-ui/core/styles';
const defaultTextColor = '#2A8BF2';
const defaultGreyColor = '#707C97';

const FormStyle = (theme) => ({
	root: {
		minWidth: 275,
		maxWidth: 350,
		marginTop: theme.spacing(15),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
		'& .MuiSvgIcon-root': {
			fontSize: 28,
		},
		'& .MuiFormLabel-root': {
			'&.Mui-focused': {
				color: '#0d6efd',
			},
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'rgb(206, 212, 218)',
				borderWidth: 1.5,
			},
			'&:hover fieldset': {
				borderColor: 'rgb(134, 183, 254)',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'rgb(134, 183, 254)',
			},
		},
	},
	form: {
		maxWidth: 450,
		minWidth: 280,
		flexDirection: 'column',
		alignItems: 'center',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
		'& .MuiDropzonePreviewList-removeButton': {
			'& .MuiSvgIcon-root': {
				fontSize: 20,
				color: defaultTextColor,
			},
		},
		'& .MuiSnackbar-root': {
			'& .MuiSnackbarContent-message': {
				'& .MuiDropzoneSnackbar-message': {
					'& .MuiSvgIcon-root': {
						fontSize: 20,
					},
					fontSize: 14,
				},
			},
			'& .MuiSnackbarContent-action': {
				'& .MuiButtonBase-root': {
					'& .MuiIconButton-label': {
						'& .MuiDropzoneSnackbar-icon': {
							fontSize: '20px !important',
						},
					},
				},
			},
		},
		'& .MuiSvgIcon-root': {
			fontSize: 28,
		},
		'& .MuiFormLabel-root': {
			'&.Mui-focused': {
				color: '#0d6efd',
			},
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'rgb(206, 212, 218)',
				borderWidth: 1.5,
			},
			'&:hover fieldset': {
				borderColor: 'rgb(134, 183, 254)',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'rgb(134, 183, 254)',
			},
		},
	},
	size: {
		width: '100%',
		textAlign: 'center',
	},
	fullWidth: {
		width: '100%',
	},
	primary: {
		color: defaultTextColor,
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: '#0d6efd !important',
		width: theme.spacing(5.5),
		height: theme.spacing(5.5),
	},
	checkBox: {
		marginLeft: 4,
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	roleAlert: {
		width: '100%',
		paddingTop: 0,
		paddingBottom: 0,
		'& .MuiSvgIcon-root': {
			fontSize: 32,
		},
		'& .MuiAlert-message': {
			fontSize: 12,
		},
		marginBottom: 5,
	},
	dataGrid: {
		fontSize: 12.5,
		'& .MuiDataGrid-cell': {
			'&:focus': {
				outline: `solid ${defaultTextColor} 1px`,
			},
			'& .Mui-checked': {
				color: defaultTextColor,
			},
		},
		'& .MuiDataGrid-colCell': {
			'&:focus': {
				outline: `solid ${defaultTextColor} 1px`,
			},
		},
		'& .MuiDataGrid-colCell-draggable .MuiDataGrid-colCellTitle': {
			fontWeight: 'bold',
			fontSize: 12.5,
		},
		'& .MuiDataGridMenu-root': {
			backgroundColor: 'red',
		},
	},
	checkBoxLabel: {
		marginBottom: 6,
	},
	icon: {
		border: '1px solid rgba(0,0,0,.25)',
		borderRadius: 3.5,
		width: 14,
		height: 14,
		backgroundColor: '#f5f8fa',
		'$root.Mui-focusVisible &': {
			outline: '2px auto rgba(19,124,189,.6)',
			outlineOffset: 2,
		},
		'input:hover ~ &': {
			backgroundColor: '#ebf1f5',
		},
		'input:disabled ~ &': {
			boxShadow: 'none',
			background: 'rgba(206,217,224,.5)',
		},
	},
	checkedIcon: {
		borderRadius: 3.5,
		backgroundColor: '#0d6efd',
		'&:before': {
			display: 'block',
			width: 14,
			height: 14,
			backgroundImage:
				"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
				" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
				"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
			content: '""',
		},
		'input:hover ~ &': {
			backgroundColor: '#005EEA',
		},
	},
	formInput: {
		borderRadius: 3.5,
		borderColor: '#e1e5eb',
		marginTop: 10,
		'& label': {
			fontSize: 14,
		},
		'& .MuiInputBase-root fieldset legend': {
			'& span': {
				fontSize: 10,
			},
		},
		'& .MuiOutlinedInput-adornedEnd': {
			paddingRight: 0,
		},
	},
	dialogContent: {
		'&:first-child': {
			paddingTop: 8,
		},
	},
	dopzoneAreaText: {
		marginBottom: 8,
		minHeight: '150px !important',
		'& .MuiTypography-root': {
			fontSize: 16,
			color: defaultTextColor,
		},
		'& .MuiSvgIcon-root': {
			fontSize: 20,
			color: defaultTextColor,
		},
	},
	description: {
		textTransform: 'none',
		textAlign: 'unset',
		color: defaultTextColor,
		'& .MuiButton-label': {
			fontSize: 12.5,
			width: 320,
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			justifyContent: 'start',
			textOverflow: 'ellipsis',
		},
	},
	formControl: {
		'& .MuiSvgIcon-root': {
			fontSize: 22,
		},
	},
	error: {
		color: 'red',
	},
	submitBtn: {
		color: 'white',
		textTransform: 'none',
		backgroundColor: '#0d6efd',
		'&:hover': {
			backgroundColor: '#005EEA',
		},
	},
	cancelBtn: {
		backgroundColor: '#707C97',
		'&:hover': {
			backgroundColor: '#565E70',
		},
	},
	denyBtn: {
		backgroundColor: '#f44336',
		'&:hover': {
			backgroundColor: '#D2362A',
		},
	},
	acceptBtn: {
		backgroundColor: '#4caf50',
		'&:hover': {
			backgroundColor: '#565E70',
		},
	},
	resetPassword: {
		marginTop: 8,
		textAlign: 'center',
		fontSize: 14,
		'& a': {
			color: '#0d6efd',
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
	},
	helpText: {
		color: 'rgb(108, 117, 125)',
		fontSize: 12,
		margin: '-2px 2px 8px 2px',
	},
	rootClip: {},
	allowed: {
		textTransform: 'none',
		borderColor: '#4caf50',
		color: '#4caf50',
		'& .MuiChip-icon': {
			color: '#4caf50',
		},
	},
	opened: {
		textTransform: 'none',
		borderColor: '#f57c00',
		color: '#f57c00',
		'& .MuiChip-icon': {
			color: '#f57c00',
		},
	},
	fixing: {
		textTransform: 'none',
		borderColor: defaultTextColor,
		color: defaultTextColor,
		'& .MuiChip-icon': {
			color: defaultTextColor,
		},
	},
	notDefined: {
		borderColor: defaultGreyColor,
		color: defaultGreyColor,
	},
	forbidden: {
		textTransform: 'none',
		color: '#f44336',
		borderColor: '#f44336',
		'& .MuiChip-icon': {
			color: '#f44336',
		},
	},
	regMenu: {
		'& .MuiButtonBase-root': {
			fontSize: 13,
		},
		'& .MuiMenu-paper': {
			boxShadow:
				'10px 10px 25px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 50px rgba(42, 139, 242, 0.1)',
		},
	},
	fixedHeightTable: {
		width: '100%',
		height: theme.spacing(107),
		[theme.breakpoints.down('xs')]: {
			height: theme.spacing(55),
		},
	},
	fixedHeightFullSize: {
		width: '100%',
		height: theme.spacing(107),
		[theme.breakpoints.down('xs')]: {
			height: theme.spacing(88),
		},
	},
	errorText: {
		color: 'red',
		textAlign: 'center',
	},
	infoAlert: {
		fontSize: 12.5,
		'& .MuiSvgIcon-root': {
			fontSize: 20,
		},
	},
	smallButton: {
		width: 150,
		color: defaultTextColor,
	},
	moreIcon: {
		color: defaultTextColor,
		fontSize: 18,
		marginRight: 5,
		transform: 'rotate(180deg)',
	},
	formControlIcon: {
		fontSize: '20px !important',
	},
});

const FormStyleMake = makeStyles(FormStyle);

export default FormStyle;
export { FormStyleMake };
