import React from 'react';
import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import ModalStyle from '../EmployersUsers/ModalStyle'


export default function AcceptModal(props) {
    const classes = ModalStyle()

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
                        <Typography variant="h6" gutterBottom>
                            {props.title} (<strong className={classes.uId}>Id#{props.context.id}</strong>)
                        </Typography>
                        {props.component ? (
                            <>
                                {props.component}
                            </>
                        ) : (
                            <>
                                {props.context.description}
                            </>
                        )}

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
    title: PropTypes.string,
    component: PropTypes.object
}
