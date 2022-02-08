import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Grid, Avatar } from '@material-ui/core';

const drawerWidth = 240;

const theme = createMuiTheme({
    overrides: {
        MuiToolbar: {
            regular: {
                backgroundColor: "#003b71",
                color: "#fff",
                height: "32px",
                minHeight: "32px",
                '@media(min-width:600px)': {
                    minHeight: "48px"
                }
            }
        }
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 0,
    },
    hide: {
        display: 'none',
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    heading: {
        lineHeight: 2.6
    },
    userHeading: {
        color: '#fff',
        fontSize: 15,
        padding: 10,
    }

}));

export default function EmpHeader() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classes.appBar}>
                <Toolbar>
                    <Grid container justify="flex-start">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            className={classes.menuButton}>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/logo/logo.png`} alt="" />
                        </IconButton>
                        <Typography variant="h6" noWrap className={classes.heading}>
                            Employee's List
                        </Typography>
                    </Grid>

                    <Grid container justify="flex-end">
                        <Grid item>

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                className={classes.menuButton}>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/logo/Layer16.png`} alt="" />
                                <img src={`${process.env.PUBLIC_URL}/assets/images/logo/Layer17.png`} alt="" />
                                <a className={classes.userHeading}>
                                    R Mishra
                                </a>
                                <Avatar src="./Images/profile_image.png" />
                            </IconButton>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
}
