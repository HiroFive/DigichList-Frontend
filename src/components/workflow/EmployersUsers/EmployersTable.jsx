import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import Chip from '@material-ui/core/Chip';
import { FormStyleMake } from '../../auth/Style/FormStyle';
import TableStyle from '../Defects/TableStyle';

import { LoadingOverlay } from '../TableComponents/Overlay';
import TableTools from './EmployersToolBar';
import SetRole from './CRUD/SetRole';
import CustomDialog from '../Dialog/Dialog';

import { withStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';

function RegisterMenu() {
    const classes = FormStyleMake();
    return (
        <div className={classes.rootClip}>
            <Chip
                className={classes.allowed}
                variant='outlined'
                size='small'
                label='Yes'
                icon={<DoneIcon />}
            />
        </div>
    );
}

function RenderRole(props) {
    RenderRole.propTypes = {
        value: PropTypes.object,
    };
    const classes = FormStyleMake();
    const paramValue = props.value.row.roleName;
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div>
            {open ? (
                <CustomDialog
                    title={'Give new role'}
                    form={<SetRole data={props.value.row} setOpenState={setOpen} />}
                    open={open}
                    setOpenState={setOpen}
                />
            ) : null}
            <Button
                aria-controls='fade-menu'
                aria-haspopup='true'
                onClick={handleOpen}
                className={`${classes.description} ${classes.smallButton}`}
            >
                {paramValue === null ? 'Set new role' : paramValue}
            </Button>
        </div>
    );
}

const columns = [
    {
        field: 'id',
        headerName: '#id',
        width: 90,
    },
    {
        field: 'firstName',
        headerName: 'Firs Name',
        width: 145,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 145,
    },
    {
        field: 'roleName',
        headerName: 'Role',
        width: 180,
        // eslint-disable-next-line react/display-name
        renderCell: (params) => <RenderRole value={params} />,
    },
    {
        field: 'isRegistered',
        headerName: 'Registered',
        width: 125,
        // eslint-disable-next-line react/display-name
        renderCell: () => <RegisterMenu />,
    },
];
class RenderCellGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            selectionModel: [],
            rows: [],
            loading: true,
        };
    }
    componentDidMount() {
        this._isMounted = true;
        axios
            .get(`https://digichlistbackend.herokuapp.com/api/users/GetRegisteredUsers`)
            .then((res) => {
                // console.log(res.data)
                if (this._isMounted) {
                    const persons = res.data;
                    this.setState({ rows: persons });
                    this.setState({ loading: false });
                }
            });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.fixedHeightTable}>
                <DataGrid
                    className={classes.dataTable}
                    rows={this.state.rows}
                    columns={columns}
                    onPageChange={(params) => {
                        this.setState({ page: params });
                    }}
                    components={{
                        Toolbar: (event) =>
                            TableTools(this.state.rows, this.state.selectionModel),
                        LoadingOverlay: LoadingOverlay,
                    }}
                    pageSize={14}
                    page={this.state.page}
                    loading={this.state.loading}
                    checkboxSelection
                    pagination
                    onSelectionModelChange={(newSelection) => {
                        this.setState({ selectionModel: newSelection.selectionModel });
                    }}
                    disableSelectionOnClick
                    selectionModel={this.state.selectionModel}
                />
            </div>
        );
    }
}

RenderCellGrid.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(TableStyle, { withTheme: true })(RenderCellGrid);
