import * as React from 'react';
import PropTypes from 'prop-types';

import {
    DataGrid,
} from '@material-ui/data-grid';
import {TableStyleMake} from '../../Defects/TableStyle'


import TableTools from './TableTools';

const columns = [
    {
        field: 'id',
        headerName: '#id',
        width: 100,
    },
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 150,
    },
    {
        field: 'email',
        headerName: 'Email Address',
        width: 250,
    },
    {
        field: 'registeredDate',
        headerName: 'Reg. Date',
        width: 250,
    },
    {
        field: 'password',
        headerName: 'Password',
        width: 250,
    },
];


export default function AdminUsersTable(props) {
    const classes = TableStyleMake()
    const rows = props.data
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [page, setPage] = React.useState(0);
    return (
        <div className={classes.root}>
            <DataGrid
                className={classes.dataTable}
                rows={rows}
                columns={columns}
                checkboxSelection
                onSelectionModelChange={(newSelection) => {
                    setSelectionModel(newSelection.selectionModel);
                }}
                page={page}
                onPageChange={(params) => {
                    setPage(params.page);
                }}
                pageSize={13} 
                disableSelectionOnClick
                rowsPerPageOptions={[13, 20, 50]}
                selectionModel={selectionModel}
                components={{
                    Toolbar: ((event) => TableTools(selectionModel, props.data)),
                }}
            />
        </div>
    );
}

AdminUsersTable.propTypes = {
    data: PropTypes.array,
}