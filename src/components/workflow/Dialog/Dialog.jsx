import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DialogStyle from './DialogStyle'



const DialogTitle = (props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
}
DialogTitle.propTypes = {
    children: PropTypes.object,
    classes: PropTypes.object,
    onClose: PropTypes.func,
}

export default function CustomizedDialogs(props) {
    const { title, form, open, setOpenState } = props;
    const classes = DialogStyle()
    const handleClose = () => {
        setOpenState(false);
    }

    return (
        <Dialog aria-labelledby="customized-dialog-title" open={open} className={classes.dialogWindow} >
            <DialogTitle id="customized-dialog-title" classes={classes} onClose={handleClose} >
                <>
                {title}
                </>
            </DialogTitle>
            {form}
        </Dialog>
    );
}

CustomizedDialogs.propTypes = {
    title: PropTypes.string,
    form: PropTypes.object,
    open: PropTypes.bool,
    setOpenState: PropTypes.func,
}