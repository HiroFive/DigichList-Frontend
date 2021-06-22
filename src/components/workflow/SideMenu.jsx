import React from "react";
import PropTypes from 'prop-types';

import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import { useAuth } from '../../contexts/auth/AuthContext';

import { WorkflowStyleMake } from "./WorkflowStyle";

import ListMenuItems from "./ListMenuItems";

//Icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

function SideMenu(props) {
    const [open, setOpen] = React.useState(false);
    const [body] = React.useState(props.body);
    const classes = WorkflowStyleMake()
    const { logout } = useAuth()

    const handleCloseDraw = () => {
        setOpen(false)
    }
    const handleDrawer = () => {
        (!open) ? setOpen(true) : setOpen(false)
    }
    const handleLogOut = async() => {
        await logout()
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawer}>
                        {open ? <ChevronLeftIcon className={classes.menuIcon} /> : <MenuIcon className={classes.menuIcon} />}
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.list} >
                    <ListMenuItems handleCloseDraw={handleCloseDraw} />
                </List>
                <List className={`${classes.list} ${classes.logoutList}`}>
                    <ListItem button onClick={handleLogOut}>
                        <ListItemIcon className={classes.menuIcon}>
                            <ExitToAppRoundedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listText} primary="Log Out" />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <Container maxWidth="xl" className={classes.container}>
                    {body}
                </Container>
            </main>
        </div>
    );
}
SideMenu.propTypes = {
    body: PropTypes.object,
}

export default SideMenu
