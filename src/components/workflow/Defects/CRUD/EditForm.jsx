import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { FormStyleMake } from '../../../auth/Style/FormStyle';

import { DropzoneArea } from 'material-ui-dropzone'
import { Formik } from "formik";
import * as Yup from "yup";

const EditForm = (props) => {
    const { data } = props;
    const classes = FormStyleMake()
    const [technician, setTechnician] = useState([])
    const menuItems = [
        {
            value: 'Opened',
            label: 'Opened',
        },
        {
            value: 'Fixing',
            label: 'Fixing',
        },
        {
            value: 'Solved',
            label: 'Solved',
        }
    ]
    const [fixesDefect, setFixesDefect] = useState(data[0].userThatFixesDefect);

    useEffect(() => {
        fetch('https://localhost:44379/api/users/GetTechnicians', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(response => response.json())
            .then(reqResponse => {
                setTechnician(reqResponse.map((params) => {
                    var newObject = {
                        id: params.id,
                        fullName: `${params.firstName} ${params.lastName}`,
                        firstName: params.firstName,
                        lastName: params.lastName,
                    }
                    return newObject
                }))
            })

    }, [data])

    return (
        <>
            {data.length < 2 ? (
                <Formik
                    initialValues={{
                        roomNumber: data[0].roomNumber,
                        defectStatus: data[0].defectStatus,
                        publisher: data[0].publisher,
                        openDate: data[0].createdAt,
                        closeDate: '',
                        image: [],
                        description: data[0].description,
                        userThatFixesDefect: fixesDefect,
                    }}
                    validationSchema={
                        Yup.object().shape({
                            roomNumber: Yup.string()
                                .max(5, 'Too long, we do not have this room in hotel!')
                                .required('Required'),
                            description: Yup.string()
                                .required('Required'),
                            image: Yup.array()
                                .min(1, 'is required!'),
                            defectStatus: Yup.string()
                                .required('Required'),
                        })
                    }
                    onSubmit={values => {
                        values.userThatFixesDefect = fixesDefect
                        console.log(values);
                    }}
                >
                    {
                        function (formik) {
                            return (
                                <form onSubmit={formik.handleSubmit} className={classes.form}>
                                    <div>
                                        <MuiDialogContent dividers className={classes.dialogContent}>

                                            <TextField
                                                error={formik.errors.description == 'Required'}
                                                className={classes.formInput}
                                                id="outlined-textarea"
                                                label="Description"
                                                multiline
                                                helperText={formik.errors.description}
                                                {...formik.getFieldProps('description')}
                                                rowsMax={4}
                                                margin="normal"
                                                size="small"
                                                fullWidth
                                                variant="outlined"
                                            />

                                            <TextField
                                                error={formik.errors.roomNumber == 'Required'}
                                                className={classes.formInput}
                                                variant="outlined"
                                                margin="normal"
                                                helperText={formik.errors.roomNumber}
                                                {...formik.getFieldProps('roomNumber')}
                                                fullWidth
                                                size="small"
                                                label="Room Number"
                                                type="number"
                                                id="roomNumber"
                                            />
                                            {/* <FormControl
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                error={formik.errors.userThatFixesDefect == 'Required'}
                                                className={`${classes.formControl} ${classes.formInput}`}>
                                                <InputLabel id="outlined-label">Fixes defect</InputLabel>
                                                <Select
                                                    labelId="outlined-label"
                                                    label="Fixes defect"
                                                    {...formik.getFieldProps('userThatFixesDefect')}
                                                >
                                                    {technician.map((params, index) => {
                                                        const { firstName, lastName, id } = params
                                                        return (
                                                            <MenuItem key={index} value={`${firstName} ${lastName}`}>
                                                                {`${firstName} ${lastName}`}
                                                            </MenuItem >
                                                        )
                                                    })}

                                                </Select>
                                            </FormControl> */}
                                            <Autocomplete
                                                id="Fixes defect"
                                                options={technician.map((option) => option.fullName)}
                                                value={fixesDefect}
                                                onChange={(event, newValue) => {
                                                    setFixesDefect(newValue);
                                                }
                                                }
                                                getOptionLabel={(option) => option}
                                                size="small"
                                                className={`${classes.formControl} ${classes.formInput}`}
                                                fullWidth
                                                renderInput={(params) =>
                                                    <TextField {...params} label="Fixes defect" variant="outlined" />
                                                }
                                            />

                                            <FormControl
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                className={`${classes.formControl} ${classes.formInput}`}>
                                                <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    label="Status"
                                                    {...formik.getFieldProps('defectStatus')}
                                                >
                                                    {menuItems.map((params, index) => {
                                                        const { value } = params
                                                        return (
                                                            <MenuItem key={index} value={value}>
                                                                {value}
                                                            </MenuItem >
                                                        )
                                                    })}

                                                </Select>
                                            </FormControl>

                                            {/* <TextField
                                                error={formik.errors.userThatFixesDefect == 'Required'}
                                                className={classes.formInput}
                                                id="userThatFixesDefect"
                                                label="Fixes defect"
                                                helperText={formik.errors.userThatFixesDefect}
                                                {...formik.getFieldProps('userThatFixesDefect')}
                                                margin="normal"
                                                size="small"
                                                fullWidth
                                                variant="outlined"
                                            /> */}
                                            <Typography variant="body2" className={formik.errors.image == 'is required!' ? classes.error : null}
                                                component="h1" gutterBottom>
                                                Chose image: {formik.errors.image}
                                            </Typography>
                                            <DropzoneArea
                                                className={classes.dropzoneArea}
                                                dropzoneClass={classes.dopzoneAreaText}
                                                showPreviews={true}
                                                showPreviewsInDropzone={false}

                                                onChange={(files) => {
                                                    formik.values.image = files
                                                }}
                                                previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
                                                previewChipProps={{ classes: { root: classes.previewChip } }}
                                                previewText='' />
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
                </Formik >

            ) : (
                <div className={classes.form}>
                    <MuiDialogContent dividers className={classes.size}>
                        <div className={classes.primary}>Please select one row</div>
                    </MuiDialogContent>
                </div>
            )
            }
        </>
    )
}

EditForm.propTypes = {
    data: PropTypes.array,
}

export default EditForm