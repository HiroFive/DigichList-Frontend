import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiSvgIcon-root': {
            fontSize: 28,
        },
        '& .MuiFormLabel-root': {
            '&.Mui-focused': {
                color: '#0d6efd',
            }
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgb(206, 212, 218)',
                borderWidth: 1.5,
            },
            '&:hover fieldset': {
                borderColor: 'rgb(134, 183, 254)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(134, 183, 254)',
            },
        },
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 4,
        padding: theme.spacing(2, 2, 2),
    },
    text: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 4,
        boxShadow: '14.0351px 0px 25px rgb(86 128 248 / 3%), 35.0877px 0px 70px rgb(86 128 248 / 5%), 23.8596px 5.61404px 50px rgb(0 0 0 / 2%);',
        padding: theme.spacing(2, 2, 2),
    },
    form: {
        textAlign: 'center',
    },
    uId: {
        color: '#2A8BF2',
    },
    topMargin: {
        marginTop: 5,
    }
}));