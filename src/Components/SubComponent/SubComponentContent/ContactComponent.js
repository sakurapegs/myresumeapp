import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import ContactsIcon from "@material-ui/icons/Contacts";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from '@material-ui/icons/Home';
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles( theme => ({
    root: {
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
    },
    yellowBackground: {
        backgroundColor: '#fff9dc',
        borderRadius: '0% 0% 394% 0%',
        height: 'auto',

    },
    media: {
        width: '100%',
        height: '100%'
    },
    paper: {
        paddingTop:'5%',
        display: 'flex',
        width: '100%',
        height: '100%',
        boxShadow: '10px 10px 5px #888888',

    },


}))


const ContactComponent = () => {
    const classes = useStyle();
    return (
        <div>
            <Grid item={true}   container className={classes.yellowBackground}>
    <Grid item={true}  xs={12} md={2}></Grid>
        <Grid md={8} style={{paddingTop: '3%'}}>
    <Grid item={true}  container>
    <Grid item={true} xs={6} md={6} style={{ color: 'white',  fontSize: "28px" }} >
    <Box flexWrap="wrap"  display="flex" justifyContent="flex-start" bgcolor="#C0C0C0"
    style={{ paddingLeft: '5%' }} >
    Contact
    </Box>
    </Grid>

    <Grid item={true} xs={6} md={6} style={{   fontSize: "28px", }} >
    <Box flexWrap="wrap"  display="flex" justifyContent="flex-end" bgcolor="#C0C0C0"
    style={{ paddingRight: '5%' }}>
    <Link to="/" style={{ textDecoration: 'none', color: 'white'}} >
    <HomeIcon />
    </Link>
    <Link to="/AboutMeComponent" style={{ textDecoration: 'none', color: 'white'}} >
    <AccountCircleIcon/>
    </Link>
    <Link to="/PortfolioComponent" style={{ textDecoration: 'none', color: 'white' }} >
    <AppsIcon/>
    </Link>
    <Link to="/ReferenceComponent" style={{ textDecoration: 'none', color: 'white'}} >
    <ContactsIcon/>
    </Link>
    </Box>
    </Grid>
    </Grid>
    <Grid item={true} container>
    <Paper className={classes.paper}>
    <Typography style={{ color: 'red'}}>
    Sorry! Developing status
    </Typography>
    </Paper>
    </Grid>
    </Grid>
    <Grid item={true}  xs={12} md={2}></Grid>
        </Grid>
        </div>
);
}
export default ContactComponent ;