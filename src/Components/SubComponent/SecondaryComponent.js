import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import {Box, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {pink,blue,grey,orange} from '@material-ui/core/colors';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContactsIcon from '@material-ui/icons/Contacts';
import AppsIcon from '@material-ui/icons/Apps';
import CallIcon from '@material-ui/icons/Call';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '5%',
        width: '122%',
        display: 'fixed',
        justifyContent: 'center',
        marginLeft: '2%'
    },
    circleIcon: {
        backgroundColor: orange[500],
        width: '90px',
        align:'center',
        height: '92px'
    },
    appsIcon: {
        backgroundColor: pink[500],
        width: '90px',
        // justifyContent: 'center',
        align:'center',
        height: '92px',
        MarginLeft: '2%'
    },
    contactIcon: {
        backgroundColor: blue[400],
        width: '90px',
        align:'center',
        height: '92px',
        MarginLeft: '2%'
    },
    callIcon: {
        backgroundColor: grey[500],
        width: '90px',
        align:'center',
        height: '92px',
        MarginLeft: '2%'
    },
    iconSize: {
        align:'center',
        width: '53px',
        height: '114px',
        MarginLeft: '2%'
    },
    fontStyle: {
        textAlign: "center",
        fontSize: '18px',
        color: "#696969",
        textDecoration: 'none !important',

    }
}));

const SecondaryComponent = () => {
    const classes = useStyles();

    return (
        <div>
            <Box>
                <Grid item={true}container className={classes.root}>
    <Box flexWrap="wrap"  display="flex" justifyContent="flex-start"

    style={{paddingTop: '3px'
    }} >

    <Grid item={true} xs={3} md={3}>
    <Link to="/AboutMeComponent" style={{ textDecoration: 'none'}} >
    <Avatar className={classes.circleIcon} style={{ marginLeft: '5px'}}
>
    <AccountCircleIcon className={classes.iconSize}/>
    </Avatar>
    <Typography className={classes.fontStyle}>
        Information
        </Typography>
        </Link>
        </Grid>
        <Grid item={true} xs={3} md={3}>
    <Link to="/PortfolioComponent" style={{ textDecoration: 'none'}} >
    <Avatar className={classes.appsIcon} style={{ marginLeft: '5px'}}>
    <AppsIcon className={classes.iconSize}/>
    </Avatar>
    <Typography className={classes.fontStyle}>
        Portfolio
        </Typography>
        </Link>
        </Grid>
        <Grid item={true} xs={3} md={3}>
    <Link to="/ReferenceComponent" style={{ textDecoration: 'none'}} >
    <Avatar className={classes.contactIcon} style={{ marginLeft: '5px'}}>
    <ContactsIcon className={classes.iconSize}/>
    </Avatar>
    <Typography className={classes.fontStyle} style={{ marginLeft: '5px'}}>
    Reference
    </Typography>
    </Link>
    </Grid>
    <Grid item={true} xs={3} md={3}>
    <Link to="/ContactComponent" style={{ textDecoration: 'none' }} >
    <Avatar className={classes.callIcon} style={{ marginLeft: '5px'}} labelPlacement="bottom"  label="Bottom">
    <CallIcon className={classes.iconSize}/>
    </Avatar>
    <Typography className={classes.fontStyle}  >
        Contact
        </Typography>
        </Link>
        </Grid>
        </Box>
        </Grid>
        </Box>
        </div>
)
}

export default SecondaryComponent;