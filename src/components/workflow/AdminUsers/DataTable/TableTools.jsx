import React from 'react';

import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

import AddAdminForm from '../CRUD/AddForm';
import EditAdminForm from '../CRUD/EditForm';
import DeleteForm from '../CRUD/DeleteForm';

import CustomToolbar, { SelectData } from '../../TableComponents/ToolBar';

export default function Toolbar(numSelected, data) {
	const buttonCRUDs = [
		{
			title: 'Add new Admin',
			icon: <PersonAddRoundedIcon />,
			disabled: false,
			content: <AddAdminForm />,
		},
		{
			title: 'Edit Admin',
			icon: <EditSharpIcon />,
			disabled: true,
			content: <EditAdminForm data={SelectData(data, numSelected)} />,
		},
		{
			title: 'Delete Admin(s) data',
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
