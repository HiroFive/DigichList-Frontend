import { makeStyles } from "@material-ui/core/styles";

const defaultTextColor = '#2A8BF2'
const defaultColorOp30 = 'rgba(42, 139, 242, 0.3)' 

const TableStyle = theme => ({
    root: {
        height: theme.spacing(107),
        width: '100%',
    },
    dataTable: {
        fontSize: 12.5,
        '& .MuiDataGrid-colCell-draggable .MuiDataGrid-colCellTitle': {
            fontWeight: 'bold',
        },
        '& .MuiDataGrid-cell': {
            '&:focus': {
                outline: `solid ${defaultTextColor} 1px`,
            },
            '&:focus-within': {
                outline: `solid ${defaultTextColor} 1px`,
            },
            '& .Mui-checked': {
                color: defaultTextColor,
            },
        },
        '& .MuiDataGrid-colCell': {
            '&:focus': {
                outline: `solid ${defaultTextColor} 1px`,
            },
            '& .Mui-checked': {
                color: defaultTextColor,
            },
        },
        '& .MuiDataGrid-root': {
            '& .MuiDataGrid-root': {
                '&.Mui-checked': {
                    backgroundColor: defaultTextColor,
                },
            }
        }
    },
    toolIcon: {
        color: defaultTextColor,
    },
    toolGrid: {
        textAlign: 'end',
        '& .MuiButtonBase-root': {
            '& .Mui-disabled': {
                '& .MuiSvgIcon-root': {
                    color: 'rgba(0, 0, 0, 0.26)',
                }

            }
        }
    },
    toolButton: {
        color: defaultTextColor,
        textTransform: 'none',
        '& .MuiBadge-badge': {
            backgroundColor: defaultTextColor,
        }
    },
    loading: {
        backgroundColor: `${defaultColorOp30} !important`,
        '& .MuiLinearProgress-bar': {
           backgroundColor: defaultTextColor, 
        },
        
    },
    fixedHeightTable: {
        width: '100%',
        height: theme.spacing(107),
        [theme.breakpoints.down('xs')]: {
            height: theme.spacing(55),
        }
    },
    fixedHeightFullSize: {
        width: '100%',
        height: theme.spacing(107),
        [theme.breakpoints.down('xs')]: {
            height: theme.spacing(88),
        }
    },
})

const TableStyleMake = makeStyles(TableStyle)

export default TableStyle
export { TableStyleMake }