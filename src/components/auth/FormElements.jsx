import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import {FormStyleMake} from './Style/FormStyle';

import PropTypes from 'prop-types';



export function SubmitBtn(props) {
    SubmitBtn.propTypes = {
        text: PropTypes.string,
    }
    const styles = FormStyleMake();
    return (
        <Button
            className={styles.submitBtn}
            type="submit"
            data-testid='submit-button'
            fullWidth
            disableRipple
            variant="contained">
            {props.text}
        </Button>
    )
}
export function HelpingText(props) {
    HelpingText.propTypes = {
        text: PropTypes.string,
        component: PropTypes.object,
    }
    const styles = FormStyleMake();
    return (
        <Typography variant="body2" className={styles.helpText}>
            {props.text}  {props.component}
        </Typography>
    )
}

export function ResetLink(props) {
    ResetLink.propTypes = {
        text: PropTypes.string,
        to: PropTypes.string,
    }
    const styles = FormStyleMake();
    return (
        <Typography className={styles.resetPassword}>
            <Link to={`/auth${props.to}`}>
                {props.text}
            </Link>
        </Typography>
    )
}


export function FormInput(props) {
    FormInput.propTypes = {
        value: PropTypes.string,
        type: PropTypes.string,
        label: PropTypes.string,
        maxLength: PropTypes.number,
        autoComplete: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
    }
    const styles = FormStyleMake();
    return (
        <TextField
            className={styles.formInput}
            variant="outlined"
            margin="normal"
            fullWidth
            size="small"
            onBlur={props.onBlur}
            onChange={props.onChange}
            value={props.value}
            label={props.label}
            type={props.type}
            id={props.label}
        />
    )
}

export function FormCard(props) {
    FormCard.propTypes = {
        components: PropTypes.object,
        title: PropTypes.string,
        icon: PropTypes.object,
    }
    const styles = FormStyleMake();
    return (
        <Container component='main' maxWidth='xs'>
            <Card className={styles.root}>
                <CardContent className={styles.cardContent}>
                    <Avatar className={styles.avatar}>
                        {props.icon}
                    </Avatar>
                    <Typography component="h2" variant="h6">
                        {props.title}
                    </Typography>
                    {props.components}
                </CardContent>
            </Card>
        </Container>
    )
}
