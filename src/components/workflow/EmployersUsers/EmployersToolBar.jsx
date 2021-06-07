import React from 'react';

import {
    GridToolbarContainer,
    GridFilterToolbarButton,
    GridToolbarExport,
} from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import {TableStyleMake} from '../Defects/TableStyle';

import { CRUDButtons, SelectData } from '../TableComponents/ToolBar';
import CustomDialog from '../Dialog/Dialog';

import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

import DeleteForm from './CRUD/DeleteForm'

export default function CustomToolbar(data, numSelected) {
    const [open, setOpenState] = React.useState(false)
    const [modalContent, setModalContent] = React.useState({});
    const classes = TableStyleMake()

    const buttonCRUDs = [
        {
            title: 'Delete Employers',
            icon: <DeleteOutlineRoundedIcon />,
            disabled: true,
            content: <DeleteForm data={SelectData(data, numSelected)} />,
        }
    ]

    const handleClickOpen = (dataId) => {
        setOpenState(true)
        setModalContent(buttonCRUDs[dataId])
    };

    return (
        <GridToolbarContainer>
            <Grid container spacing={3}>
                <Grid item xs={5} md={9} lg={10}>
                    <GridFilterToolbarButton className={classes.toolButton} />
                    <GridToolbarExport className={classes.toolButton} />
                </Grid>
                <Grid item xs={7} md={3} lg={2} className={classes.toolGrid}>
                    {buttonCRUDs.map((params, index) => {
                        return (
                            <span key={index}>
                                <CRUDButtons
                                    title={params.title}
                                    handleClickOpen={handleClickOpen}
                                    btnIndex={index}
                                    disabled={params.disabled}
                                    selectedCount={numSelected.length}
                                    icon={params.icon} />
                            </span>
                        )
                    })}
                </Grid>
            </Grid>
            <CustomDialog title={modalContent.title} form={modalContent.content} open={open} setOpenState={setOpenState} />
        </GridToolbarContainer>
    );
}
