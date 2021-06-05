import { makeStyles } from '@material-ui/core/styles';

const defaultTextColor = '#2A8BF2'

export default makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
        '&:hover': {
            color: defaultTextColor,
        }
    },
    dialogWindow: {
        '& .MuiPaper-root': {
            boxShadow: '14.0351px 0px 25px rgb(86 128 248 / 3%), 35.0877px 0px 70px rgb(86 128 248 / 5%), 23.8596px 5.61404px 50px rgb(0 0 0 / 2%);',
            minWidth: 320,
        },
        
    }
}))