import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import FormStyle from '../../../components/auth/FormStyle';


const DeleteForm = (props) => {
    const styles = FormStyle();
    const handleSubmit = () => {
        console.log(props.data);
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fullWidth}>
                <MuiDialogContent dividers>
                    <Typography variant="body1" className={styles.title}>
                        You really want delete this data (<strong className={styles.primary}>{props.data.length}</strong> items)?
                    </Typography>
                    <div className={styles.demo}>
                        <List>
                            {props.data.map((item) => {
                                const { name, id } = item
                                return (
                                    <Typography key={id} variant="body2" className={styles.title}>
                                        {`{ Id = ${id}; name = ${name} }`}
                                    </Typography>
                                )
                            })}
                        </List>
                    </div>
                </MuiDialogContent>
                <MuiDialogActions>
                    <Button
                        size="small"
                        className={styles.submitBtn}
                        type="submit"
                        disableRipple
                        variant="contained">
                        Yes, I want
                    </Button>
                </MuiDialogActions>
            </div>
        </form>
    )
}

DeleteForm.propTypes = {
    data: PropTypes.array,
}

export default DeleteForm