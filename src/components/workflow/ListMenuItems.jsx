import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../contexts/auth/AuthContext'

import WorkflowStyle from "./WorkflowStyle";
import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

function ListMenuItems(props) {
    const { classes } = props
    const { currentUser } = useAuth();
    const location = useLocation();
    const [selected, setSelected] = useState();

    const itemsList = [
        {
            text: "Dashboard",
            icon: <DashboardOutlinedIcon />,
            accessLevel: 0,
            href: "/workflow/dashboard"
        },
        {
            text: "Admins",
            icon: <SupervisorAccountIcon />,
            accessLevel: 2,
            href: "/workflow/admin-users"
        },
        {
            text: "Employees",
            icon: <WorkOutlineIcon />,
            accessLevel: 0,
            href: "/workflow/employees-users"
        },
        {
            text: "Defects",
            accessLevel: 0,
            icon: <BugReportOutlinedIcon />,
            href: "/workflow/defects"
        },
    ]
    const handleSelect = (event, index) => {
        setSelected(index)
        props.handleCloseDraw()
    }

    return (
        itemsList.map((item, index) => {
            const { text, icon, href, accessLevel } = item;
            const d = true
            if (currentUser.accessLevel >= accessLevel || d) {
                return (
                    <Link key={text} to={href} className={classes.listLink}>
                        <ListItem button key={text} onClick={event => handleSelect(event, index)} selected={selected === index || href == location.pathname}>
                            {icon && <ListItemIcon className={classes.menuIcon}> {icon} </ListItemIcon>}
                            <ListItemText className={classes.listText} primary={text} />
                        </ListItem>
                    </Link>
                )
            }

        })
    )
}

ListMenuItems.propTypes = {
    handleCloseDraw: PropTypes.func,
}

export default withStyles(WorkflowStyle, { withTheme: true })(ListMenuItems)