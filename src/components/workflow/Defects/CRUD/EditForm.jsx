import React from 'react'
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

import FormStyle from '../../../auth/FormStyle';

import { DropzoneArea } from 'material-ui-dropzone'
import { Formik } from "formik";
import * as Yup from "yup";

const EditForm = (props) => {
    const { data } = props;
    const classes = FormStyle()
    const menuItems = [
        {
            value: 'Open',
            label: 'Open',
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
    console.log(data)
    return (
        <>
            { data.length < 2 ? (
                < Formik
                    initialValues={{
                        roomNumber: data[0].roomNumber,
                        state: `${data[0].state}`,
                        publisher: data[0].publisher,
                        openDate: new Date(),
                        closeDate: '',
                        image: [],
                        description: data[0].description,
                        assignedDefect: `${data[0].assignedDefect}`,
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
                            assignedDefect: Yup.string()
                                .min(5, 'Too Short!')
                                .max(20, 'Too Long!')
                                .required('Required'),
                        })
                    }
                    onSubmit={values => {
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
                                            <FormControl
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    label="State"
                                                    {...formik.getFieldProps('state')}
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

                                            <TextField
                                                error={formik.errors.assignedDefect == 'Required'}
                                                className={classes.formInput}
                                                id="assignedDefect"
                                                label="Assigned Defect"
                                                helperText={formik.errors.assignedDefect}
                                                {...formik.getFieldProps('assignedDefect')}
                                                margin="normal"
                                                size="small"
                                                fullWidth
                                                variant="outlined"
                                            />
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