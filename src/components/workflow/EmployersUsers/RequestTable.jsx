import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormStyle from '../../auth/FormStyle';

import AcceptModal from './Modal'

function RequestAction(props) {
    const { context } = props;
    const classes = FormStyle()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDeny = (e) => {
        e.preventDefault();
        console.log(context.row)
    }

    return (
        <div>
            {open ? <AcceptModal open={open} handleClose={handleClose} context={context.row} />
                : null
            }
            <form onSubmit={handleDeny}>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.submitBtn}
                        style={{ marginLeft: 16 }}
                        onClick={handleOpen}
                    >
                        Accept
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="small"
                        className={`${classes.submitBtn} ${classes.cancelBtn}`}>
                        Deny
                    </Button>
                </ButtonGroup>
            </form>

        </div>

    )
}
RequestAction.propTypes = {
    context: PropTypes.object,
}

const columns = [
    {
        field: 'id',
        headerName: '#id',
        width: 85,
    },
    {
        field: 'firstName',
        headerName: 'Firs Name',
        width: 125,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 125,
    },
    {
        field: 'role',
        headerName: 'Role',
        width: 150,
    },
    {
        field: 'isRegistered',
        headerName: 'Action',
        width: 160,
        // eslint-disable-next-line react/display-name
        renderCell: (params) => (<RequestAction context={params} />)
    },

];

export default function RenderCellGrid(props) {
    const rows = props.data
    const classes = FormStyle()
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [page, setPage] = React.useState(0);
    return (
        <div className={classes.fixedHeightTable}>
            <DataGrid
                className={classes.dataGrid}
                rows={rows}
                columns={columns}
                page={page}
                onPageChange={(params) => {
                    setPage(params.page);
                }}
                pageSize={14}
                pagination
                onSelectionModelChange={(newSelection) => {
                    setSelectionModel(newSelection.selectionModel);
                }}
                selectionModel={selectionModel}
            />
        </div>
    );
}


RenderCellGrid.propTypes = {
    data: PropTypes.array.isRequired,
};