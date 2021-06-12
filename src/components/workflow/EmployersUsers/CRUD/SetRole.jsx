import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import FormStyle from '../../../auth/Style/FormStyle';
import { withStyles } from "@material-ui/core/styles";


class SetTechnician extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
            idSelectedRole: '',
            userId: props.data.id,
            open: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async componentDidMount() {
        this._isMounted = true;
        await fetch('https://digichlistbackend.herokuapp.com/api/roles', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(response => response.json())

            .then(reqResponse => {
                this.setState({ menuItems: reqResponse })
                this.setState({
                    idSelectedRole: this.state.menuItems.map((params) => {
                        return params.roleName == this.props.data.roleName ? params.id : ''
                    }).join('')
                })
            }
            )
            .then()
    }
    componentWillUnMount() {
        this._isMounted = false;
    }
    handleChange(event, newValue) {
        event.stopPropagation();
        this.setState({ idSelectedRole: event.target.value })
        this.props.data.roleName == 'Technician' && newValue.props.children !== 'Technician' ? this.setState({ open: true }) : this.setState({ open: false })
    }
    async handleSubmit(event) {
        event.preventDefault();
        if (this.state.idSelectedRole == 'null') {
            await fetch(`https://digichlistbackend.herokuapp.com/api/roles/RemoveRoleFromUser?userId=${this.state.userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            }).then(response => response.ok === true ? location.reload() : null)
        } else {
            await fetch(`https://digichlistbackend.herokuapp.com/api/roles/AssignRole?userId=${this.state.userId}&roleId=${this.state.idSelectedRole}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            }).then(response => response.ok === true ? location.reload() : null)
        }
    }

    render() {
        const { classes } = this.props
        return (
            <form onSubmit={this.handleSubmit} className={classes.form}>
                <div>
                    <MuiDialogContent dividers className={classes.dialogContent}>
                        <Collapse in={this.state.open}>
                            <Alert variant="filled" className={classes.roleAlert} severity="warning">
                                When you change the role, all assigned defects will be removed
                            </Alert>
                        </Collapse>
                        <FormControl
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={`${classes.formControl} ${classes.formInput}`}>
                            <InputLabel id="outlined-label">Roles</InputLabel>
                            <Select
                                labelId="outlined-label"
                                label="Roles"
                                onChange={this.handleChange}
                                value={this.state.idSelectedRole}
                            >
                                {this.state.menuItems.map((params, index) => {
                                    const { roleName, id } = params
                                    return (
                                        <MenuItem key={index} value={id}>
                                            {roleName}
                                        </MenuItem>
                                    )
                                })}
                                <MenuItem value='null'>
                                    Unset role
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </MuiDialogContent>
                    <MuiDialogActions>
                        <Button
                            size="small"
                            className={classes.submitBtn}
                            type="submit"
                            disableRipple
                            variant="contained">
                            Save
                        </Button>
                    </MuiDialogActions>
                </div>
            </form>
        )
    }

}
SetTechnician.propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object,
    setOpenState: PropTypes.func,
}
export default withStyles(FormStyle, { withTheme: true })(SetTechnician)