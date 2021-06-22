import React from 'react';

import CustomToolbar, { SelectData } from '../TableComponents/ToolBar';

import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

import DeleteForm from './CRUD/DeleteForm';
import EditForm from './CRUD/EditForm';

export default function DefectToolbar(data, numSelected) {
	const buttonCRUDs = [
		{
			title: 'Edit Defect',
			icon: <EditSharpIcon />,
			disabled: true,
			content: <EditForm data={SelectData(data, numSelected)} />,
		},
		{
			title: 'Delete Defect',
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
