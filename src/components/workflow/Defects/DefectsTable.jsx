/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
    DataGrid,
} from '@material-ui/data-grid';
import TableStyle from './TableStyle';
import { withStyles } from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip';

import { FormStyleMake } from '../../auth/Style/FormStyle';
import Button from '@material-ui/core/Button';
import { LoadingOverlay } from '../TableComponents/Overlay';

import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

import TableTools from './TableToolBar';
import DescriptionModal from './DescriptionModal'

function RenderDescription(props) {
    RenderDescription.propTypes = {
        data: PropTypes.object,
    }
    const context = props.data.row
    const classes = FormStyleMake()
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {open ? <DescriptionModal open={open} handleClose={handleClose} context={context} />
                : null
            }
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleOpen} className={classes.description} >
                {props.data.value}
            </Button>
        </div>
    )
}

function RenderState(props) {
    RenderState.propTypes = {
        value: PropTypes.object,
    }
    const classes = FormStyleMake()
    const paramValue = props.value.value;
    return (
        <div>
            {paramValue == 'Open' ? (
                <Chip variant="outlined" size="small" label="Open" className={classes.opened} icon={<ErrorRoundedIcon />} />
            ) : (
                paramValue == 'Fixing' ? (
                    <Chip variant="outlined" size="small" label="Fixing" className={classes.fixing} icon={<FiberManualRecordRoundedIcon />} />
                ) : (
                    <Chip className={classes.allowed} variant="outlined" size="small" label="Solved" icon={<CheckCircleRoundedIcon />} />
                )
            )}
        </div>
    )
}

const columns = [
    {
        field: 'id',
        headerName: '#id',
        width: 100,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 360,
        renderCell: (params) => <RenderDescription data={params} />,
    },
    {
        field: 'roomNumber',
        headerName: 'Room Number',
        width: 140,
    },
    {
        field: 'publisher',
        headerName: 'Publisher',
        width: 150,
    },
    {
        field: 'assignedDefect',
        headerName: 'Decides defect',
        width: 150,
    },
    {
        field: 'state',
        headerName: 'State',
        width: 150,
        renderCell: (params) => <RenderState value={params} />,
    },

];

class DefectsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectionModel: [],
            page: 0,
            rows: [],
            loading: true
        }
    }

    componentDidMount() {
        this._isMounted = true;
        axios.get(`https://digichlistbackend.herokuapp.com/api/defect`)
            .then(res => {
                const persons = res.data;
                this.setState({ rows: persons })
                this.setState({ loading: false })
            })
    }
    componentWillUnMount() {
        this._isMounted = false;
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <DataGrid
                    className={classes.dataTable}
                    rows={this.state.rows}
                    columns={columns}
                    components={{
                        Toolbar: ((event) => TableTools(this.state.rows, this.state.selectionModel)),
                        LoadingOverlay: LoadingOverlay,
                    }}
                    loading={this.state.loading}
                    checkboxSelection
                    onSelectionModelChange={(newSelection) => {
                        this.setState({ selectionModel: newSelection.selectionModel });
                    }}
                    page={this.state.page}
                    onPageChange={(params) => {
                        this.setState({ page: params.page });
                    }}
                    pageSize={13}
                    disableSelectionOnClick
                    rowsPerPageOptions={[13, 20, 50]}
                    selectionModel={this.state.selectionModel}
                />
            </div>
        );
    }
}
DefectsTable.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(TableStyle, { withTheme: true })(DefectsTable)