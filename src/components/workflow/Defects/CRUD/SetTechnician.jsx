import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';

import FormStyle from '../../../auth/Style/FormStyle';
import { withStyles } from "@material-ui/core/styles";

import { Formik } from "formik";
import * as Yup from "yup";

class SetTechnician extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: []
        }
    }
    async componentDidMount() {
        this._isMounted = true;
        await fetch('https://localhost:44379/api/users/GetTechnicians', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(response => response.json())
            .then(reqResponse => this.setState({ menuItems: reqResponse }))
    }
    componentWillUnMount() {
        this._isMounted = false;
    }
    render() {
        const { classes, data } = this.props
        const items = this.state.menuItems
        return (
            <Formik
                initialValues={{
                    userThatFixesDefect: '',
                }}
                validationSchema={
                    Yup.object().shape({
                        userThatFixesDefect: Yup.string()
                            .required('Required'),
                    })
                }
                onSubmit={values => {
                    console.log(values);
                    fetch(`https://localhost:44379/api/defect?userId=${values}&defectId=${data.id}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                    })
                }}
            >
                {
                    function (formik) {
                        return (
                            <form onSubmit={formik.handleSubmit} className={classes.form}>
                                <FormControl
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    error={formik.errors.userThatFixesDefect == 'Required'}
                                    className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Fixes defect</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        label="Fixes defect"
                                        id="demo-simple-select-outlined"
                                        {...formik.getFieldProps('userThatFixesDefect')}
                                    >
                                        {items.map((params, index) => {
                                            const { firstName, lastName, id } = params
                                            return (
                                                <MenuItem key={index} value={id}>
                                                    {`${firstName} ${lastName}`}
                                                </MenuItem>
                                            )
                                        })}
                                    </Select>
                                    <Box component="div" m={1}>
                                        <Button
                                            size="small"
                                            className={classes.submitBtn}
                                            type="submit"
                                            disableRipple
                                            fullWidth
                                            variant="contained">
                                            Save
                                    </Button>
                                    </Box>
                                </FormControl>
                            </form>
                        )
                    }
                }
            </Formik >
        )
    }

}
SetTechnician.propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object,
}
export default withStyles(FormStyle, { withTheme: true })(SetTechnician)