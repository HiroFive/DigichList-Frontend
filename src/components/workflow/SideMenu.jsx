/* eslint-disable react/prop-types */
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

import WorkflowStyle from "./WorkflowStyle";
import { withStyles } from "@material-ui/core/styles";


import ListMenuItems from "./ListMenuItems";

//Icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';


class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            body: props.body
        }
        this.handleCloseDraw = this.handleCloseDraw.bind(this)
        this.handleDrawer = this.handleDrawer.bind(this)
    }

    handleCloseDraw() {
        this.setState({ open: false })
    }
    handleDrawer() {
        (!this.state.open) ? this.setState({ open: true }) : this.setState({ open: false })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawer}>
                            {this.state.open ? <ChevronLeftIcon className={classes.menuIcon} /> : <MenuIcon className={classes.menuIcon} />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List className={classes.list} >
                        <ListMenuItems handleCloseDraw={this.handleCloseDraw} />
                    </List>
                    <List className={`${classes.list} ${classes.logoutList}`}>
                        <ListItem button>
                            <ListItemIcon className={classes.menuIcon}>
                                <PowerSettingsNewOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText className={classes.listText} primary="Log Out" />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <Container maxWidth="xl" className={classes.container}>
                        {this.state.body}
                    </Container>
                </main>
            </div>
        );
    }
}
SideMenu.propTypes = {
    body: PropTypes.object,
}

export default withStyles(WorkflowStyle, { withTheme: true })(SideMenu)
