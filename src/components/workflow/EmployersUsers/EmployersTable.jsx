import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import Chip from '@material-ui/core/Chip';
import { FormStyleMake } from '../../auth/Style/FormStyle';
import TableStyle from '../Defects/TableStyle'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { LoadingOverlay } from '../TableComponents/Overlay'
import TableTools from './EmployersToolBar';
import SetRole from './CRUD/SetRole';
import CustomDialog from '../Dialog/Dialog';

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { withStyles } from "@material-ui/core/styles";

import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';


function RegisterMenu(props) {
    RegisterMenu.propTypes = {
        params: PropTypes.object,
    }
    const { params } = props
    const classes = FormStyleMake()
    const [selectedIndex, setSelectedIndex] = React.useState(params.value);
    const options = [
        'Set No',
        'Set Yes',
    ];
    return (
        <div className={classes.rootClip}>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => {
                    const closeMenu = (event, index) => {
                        setSelectedIndex(index);
                        popupState.close();
                    }
                    return (
                        <React.Fragment>
                            {selectedIndex == true ? (
                                <Button aria-controls="fade-menu" aria-haspopup="true" {...bindTrigger(popupState)}>
                                    <Chip className={classes.allowed} variant="outlined" size="small" label="Yes" icon={<DoneIcon />} />
                                </Button>
                            ) : (
                                <Button aria-controls="fade-menu" aria-haspopup="true" {...bindTrigger(popupState)}>
                                    <Chip className={classes.forbidden} variant="outlined" size="small" label="No" icon={<CloseIcon />} />
                                </Button>
                            )
                            }
                            <Menu className={classes.regMenu} {...bindMenu(popupState)}>
                                {options.map((option, index) => (
                                    <MenuItem
                                        key={option}
                                        disabled={index === Number(selectedIndex)}
                                        onClick={(event) => closeMenu(event, index)}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </React.Fragment>
                    )
                }}
            </PopupState>
        </div>)
}


function RenderRole(props) {
    RenderRole.propTypes = {
        value: PropTypes.object,
    }
    const classes = FormStyleMake()
    const paramValue = props.value.row.roleName
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div>
            {open ? <CustomDialog title={'Give new role'} form={<SetRole data={props.value.row} setOpenState={setOpen} />} open={open} setOpenState={setOpen} />
                : null
            }
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleOpen} className={`${classes.description} ${classes.smallButton}`} >
                {paramValue}
            </Button>
        </div>

    )
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
        renderCell: (params) => (<RenderRole value={params} />)
    },
    {
        field: 'isRegistered',
        headerName: 'Registered',
        width: 125,
        // eslint-disable-next-line react/display-name
        renderCell: (params) => (<RegisterMenu params={params} />)
    }
];
class RenderCellGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            selectionModel: [],
            rows: [],
            loading: true
        }
    }
    componentDidMount() {
        this._isMounted = true;
        axios.get(`https://digichlistbackend.herokuapp.com/api/users`)
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
            <div className={classes.fixedHeightTable}>
                <DataGrid
                    className={classes.dataTable}
                    rows={this.state.rows}
                    columns={columns}
                    onPageChange={(params) => {
                        this.setState({ page: params });
                    }}
                    components={{
                        Toolbar: ((event) => TableTools(this.state.rows, this.state.selectionModel)),
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

export default withStyles(TableStyle, { withTheme: true })(RenderCellGrid)