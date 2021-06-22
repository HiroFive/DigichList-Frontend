import React from 'react';

import CustomToolbar, { SelectData } from '../TableComponents/ToolBar';

import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import DeleteForm from './CRUD/DeleteForm';

export default function Toolbar(data, numSelected) {
	const buttonCRUDs = [
		{
			title: 'Delete Employers',
			icon: <DeleteOutlineRoundedIcon />,
			disabled: true,
			content: <DeleteForm data={SelectData(data, numSelected)} />,
		},
	];

	return (
		<CustomToolbar
			data={data}
			numSelected={numSelected}
			buttonCRUDs={buttonCRUDs}
		/>
	);
}
