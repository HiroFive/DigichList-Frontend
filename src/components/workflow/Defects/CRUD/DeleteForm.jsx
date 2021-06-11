import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import {FormStyleMake} from '../../../auth/Style/FormStyle';


function DeleteSting(data){
    var string ='?'
    data.map((params)=>{
        string = string + (string.length > 2? ' ': '' ) + `idArr=${params.id}`
    })
    return string.replace(/\s/g, '&');
}

const DeleteForm = (props) => {
    const styles = FormStyleMake();
    const  handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(`https://localhost:44379/api/defect/DeleteDefects?${DeleteSting(props.data)}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(response => response.ok === true ? location.reload() : null )
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fullWidth}>
                <MuiDialogContent dividers>
                    <Typography variant="body1" className={styles.title}>
                        You really want delete this data (<strong className={styles.primary}>{props.data.length} items</strong>)?
                    </Typography>
                    <div className={styles.demo}>
                        <List>
                            {props.data.map((item) => {
                                const { id, roomNumber, defectStatus } = item
                                return ( 
                                    <Typography key={id} variant="body2" className={styles.title}>
                                        {`{ Id#${id}; room: ${roomNumber}; state: ${defectStatus} }`}
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