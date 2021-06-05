import React from 'react';
import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormStyleMake } from '../../auth/Style/FormStyle';
import ModalStyle from './ModalStyle'


export default function AcceptModal(props) {
    const classes = ModalStyle()
    const styles = FormStyleMake()
    const [selectedRole, setSelectedRole] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const role = [
        {
            value: 'Worker1'
        },
        {
            value: 'Worker2'
        }
    ]

    const handleChangeSelectedRole = (event) => {
        setSelectedRole(event.target.value);
        event.stopPropagation()
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Typography variant="body1" gutterBottom>
                                You want to confirm the request (<strong className={classes.uId}>Id#{props.context.id}</strong>)
                                </Typography>
                            <Typography variant="subtitle2" className={classes.text} gutterBottom>
                                UserId: #, name: {props.context.firstName} {props.context.lastName}
                                <FormControl
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    className={styles.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                                    <Select
                                        value={selectedRole}
                                        onChange={handleChangeSelectedRole}
                                        labelId="demo-simple-select-outlined-label"
                                        label="State"
                                    >
                                        {role.map((params, index) => {
                                            const { value } = params
                                            return (
                                                <MenuItem key={index} value={value}>
                                                    {value}
                                                </MenuItem >
                                            )
                                        })}

                                    </Select>
                                </FormControl>
                            </Typography>

                            <ButtonGroup className={classes.topMargin} disableElevation variant="contained" color="primary">
                                <Button
                                    className={styles.submitBtn}
                                    type="submit"
                                    size="small"
                                    disableRipple
                                    variant="contained">
                                    Yes, I want
                                    </Button>
                                <Button
                                    onClick={props.handleClose}
                                    className={`${styles.submitBtn} ${styles.cancelBtn}`}
                                    size="small"
                                    disableRipple
                                    variant="contained">
                                    Cancel
                                    </Button>
                            </ButtonGroup>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

AcceptModal.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    context: PropTypes.object,
}
