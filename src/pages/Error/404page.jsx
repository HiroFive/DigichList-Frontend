import React from 'react';
import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    listMargin: {
        width: '80%',
        marginLeft: 40,
    }
}));

export default function Error404() {
    let location = useLocation();
    const styles = useStyles();
    return (
        <div>
            <div>
                <List className={styles.root} subheader={<li />}>
                    <li key={`section-/auth`} className={styles.listSection}>
                        <ul className={styles.ul}>
                            <ListSubheader>{`Router /auth`}</ListSubheader>
                            <ListItem className={styles.listMargin}>
                                <ListItemText primary={`/auth/login`} />
                            </ListItem>
                            <ListItem className={styles.listMargin}>
                                <ListItemText primary={`/auth/forgot-password`} />
                            </ListItem>
                            <ListItem className={styles.listMargin}>
                                <ListItemText primary={`/auth/security-code/:id`} />
                            </ListItem>
                            <ListItem className={styles.listMargin}>
                                <ListItemText primary={`/auth/confirm-password`} />
                            </ListItem>
                        </ul>
                    </li>
                    <li key={`section-/workflow`} className={styles.listSection}>
                        <ul className={styles.ul}>
                            <ListSubheader>{`Router /workflow`}</ListSubheader>
                            <ListItem className={styles.listMargin}>
                                <ListItemText primary={`/workflow/admin-users`} />
                            </ListItem>
                            <ListItem className={styles.listMargin}>
                                <ListItemText primary={`/workflow/dashboard`} />
                            </ListItem>
                            <ListItem className={styles.listMargin}>
                                <ListItemText primary={`/workflow/defects`} />
                            </ListItem>
                            <ListItem className={styles.listMargin}>
                                <ListItemText primary={`/workflow/employers-users`} />
                            </ListItem>
                        </ul>
                    </li>
                </List>
            </div>
            <h1>No math for <code>{location.pathname}</code></h1>
        </div>
    )
}