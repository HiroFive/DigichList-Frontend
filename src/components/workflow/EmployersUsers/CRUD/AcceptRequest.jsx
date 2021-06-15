import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Alert from '@material-ui/lab/Alert';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { FormHelperText } from '@material-ui/core';

import FormStyle from '../../../auth/Style/FormStyle';
import { withStyles } from '@material-ui/core/styles';

class AcceptRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
            idSelectedRole: '',
            userId: props.data.id,
            showErrorMessage: false,
            requiredMessage: 'Required',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
        this._isMounted = true;
        await fetch('https://digichlistbackend.herokuapp.com/api/roles', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((response) => response.json())

            .then((reqResponse) => {
                this.setState({ menuItems: reqResponse });
            })
    }
    componentWillUnMount() {
        this._isMounted = false;
    }
    handleChange(event) {
        event.stopPropagation();
        this.setState({ idSelectedRole: event.target.value });
        this.setState({ showErrorMessage: false })
    }
    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.idSelectedRole)
        if (this.state.idSelectedRole == '') {
            this.setState({ showErrorMessage: true })
        }
        else {
            await fetch(`https://digichlistbackend.herokuapp.com/api/roles/AssignRole?userId=${this.state.userId}&roleId=${this.state.idSelectedRole}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                }
            ).then((response) => (response.ok === true ? location.reload() : null));
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className={classes.form}>
                <div>
                    <MuiDialogContent dividers className={classes.dialogContent}>
                        <Alert variant="outlined" className={classes.infoAlert} severity="info">
                            If you want to accept the request, you should choose a role
                        </Alert>
                        <FormControl
                            variant='outlined'
                            size='small'
                            fullWidth
                            error={this.state.showErrorMessage}
                            className={`${classes.formControl} ${classes.formInput}`}
                        >
                            <InputLabel id='outlined-label'>Roles</InputLabel>
                            <Select
                                labelId='outlined-label'
                                label='Roles'

                                onChange={this.handleChange}
                                value={this.state.idSelectedRole}
                            >
                                {this.state.menuItems.map((params, index) => {
                                    const { roleName, id } = params;
                                    return (
                                        <MenuItem key={index} value={id}>
                                            {roleName}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                            <FormHelperText error={this.state.showErrorMessage}>
                                {this.state.showErrorMessage ? this.state.requiredMessage : null}
                            </FormHelperText>
                        </FormControl>

                    </MuiDialogContent>
                    <MuiDialogActions>
                        <Button
                            size='small'
                            className={classes.submitBtn}
                            type='submit'
                            disableRipple
                            variant='contained'
                        >
                            Accept
                        </Button>
                    </MuiDialogActions>
                </div>
            </form>
        );
    }
}
AcceptRequest.propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object,
    setOpenState: PropTypes.func,
};
export default withStyles(FormStyle, { withTheme: true })(AcceptRequest);
