import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
    DataGrid,
} from '@material-ui/data-grid';

import TableStyle from '../../Defects/TableStyle'
import { withStyles } from "@material-ui/core/styles";

import TableTools from './TableTools';
import { LoadingOverlay } from '../../TableComponents/Overlay';

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
        field: 'password',
        headerName: 'Password',
        width: 250,
    },
];

class AdminUsersTable extends React.Component {
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
        axios.get(`https://localhost:44379/api/admin`)
            .then(res => {
                const admins = res.data;
                this.setState({ rows: admins })
                this.setState({ loading: false })
            })
    }
    componentWillUnMount() {
        this._isMounted = false;
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.fixedHeightFullSize}>
                <DataGrid
                    className={classes.dataTable}
                    rows={this.state.rows}
                    columns={columns}
                    checkboxSelection
                    onSelectionModelChange={(newSelection) => {
                        this.setState({selectionModel: newSelection.selectionModel});
                    }}
                    page={this.state.page}
                    onPageChange={(params) => {
                        this.setState({page: params.page});
                    }}
                    pageSize={13}
                    loading={this.state.loading}
                    disableSelectionOnClick
                    rowsPerPageOptions={[13, 20, 50]}
                    selectionModel={this.state.selectionModel}
                    components={{
                        Toolbar: ((event) => TableTools(this.state.selectionModel, this.state.rows)),
                        LoadingOverlay: LoadingOverlay,
                    }}
                />
            </div>
        );
    }

}

AdminUsersTable.propTypes = {
    data: PropTypes.array,
    classes: PropTypes.object,
}


export default withStyles(TableStyle, { withTheme: true })(AdminUsersTable)