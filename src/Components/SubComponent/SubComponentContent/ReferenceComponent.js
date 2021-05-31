import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {ReactComponent as Reference} from "../../../SVG/reference.svg";
import {ReactComponent as Bayside} from "../../../SVG/bayside.svg";
import {ReactComponent as Jan} from "../../../SVG/jan.svg";
import {ReactComponent as Ryan} from "../../../SVG/ryan.svg";
import {ReactComponent as Angelo} from "../../../SVG/angelo.svg";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CallIcon from "@material-ui/icons/Call";
import HomeIcon from '@material-ui/icons/Home';

const useStyle = makeStyles( theme => ({
    root: {
        // width: '100%',
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
    },
    yellowBackground: {
        backgroundColor: '#fff9dc',
        borderRadius: '0% 0% 394% 0%',
        // width: '50%',
        height: 'auto',
        // opacity: '35%'
    },
    media: {
        width: '62px',
        height: '62px',
        marginTop:'5%',
        marginRight: '20%',
        alignContent: 'center',
        display: 'fixed'
    },
    paper: {
        paddingTop:'5%',
        display: 'flex',
        width: '100%',
        height: '100%',
        boxShadow: '10px 10px 5px #888888',

    },


}))


const ReferenceComponent = () => {
    const classes = useStyle();
    return (
        <div>
            <Grid  container className={classes.yellowBackground}>
    <Grid item={true} xs={12} md={2}></Grid>
        <Grid item={true} xs={12} md={8} style={{paddingTop: '3%'}}>
    <Grid item={true} container>
    <Grid item={true} xs={6} md={6} style={{ color: 'white',  fontSize: "28px" }} >
    <Box flexWrap="wrap"  display="flex" justifyContent="flex-start" bgcolor="#157DEC"
    style={{ paddingLeft: '5%' }} >
    Reference
    </Box>
    </Grid>

    <Grid item={true} xs={6} md={6} style={{   fontSize: "28px", }} >
    <Box flexWrap="wrap"  display="flex" justifyContent="flex-end" bgcolor="#157DEC"
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
    <Link to="/ContactComponent" style={{ textDecoration: 'none', color: 'white' }} >
    <CallIcon/>
    </Link>
    </Box>
    </Grid>
    </Grid>
    <Grid item={true} xs={12} container>
    <Paper className={classes.paper}>
    <Grid item={true}xs={12} md={5}>
        <Reference/>
        </Grid>
        <Grid item={true} xs={12} md={7}>
    <Grid item={true} xs={12} md={12} container>
    <Grid item={true} xs={12} md={2}>
    <Avatar className={classes.media}>
        <Ryan/>
        </Avatar>
        </Grid>
        <Grid  item={true} xs={12} md={3} style={{marginLeft: '1%', marginTop: '2%'}}>
    <Typography>
        Ryan Canseco
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    Senior Full Stack Developer
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    AJIO IT Solutions
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    +639199837336
    </Typography>
    </Grid>

    <Grid item={true} xs={12} md={2}>
    <Avatar className={classes.media}>
        <Angelo/>
        </Avatar>
        </Grid>
        <Grid  item={true} xs={12} md={3} style={{marginLeft: '1%',marginTop: '2%'}}>
    <Typography>
        Angelo Palma
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    Senior Full Stack Developer
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    AJIO IT Solutions
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    +639085867281
    </Typography>
    </Grid>
    </Grid>
    <Grid  item={true} container xs={12}>
    <Grid xs={12} md={2}>
    <Avatar className={classes.media}>
        <Bayside/>
        </Avatar>
        </Grid>
        <Grid  item={true} xs={12} md={3} style={{marginLeft: '1%', marginTop: '5%'}}>
    <Typography>
        Ann Soliano
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    Human Resources
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    Bayside English College
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    (032) 236 0428
    </Typography>
    </Grid>
    <Grid item={true} xs={12} md={2}>
    <Avatar className={classes.media}>
        <Jan/>
        </Avatar>
        </Grid>

        <Grid  item={true} xs={12} md={3} style={{marginLeft: '1%', marginTop: '5%'}}>
    <Typography>
        Jan Rolly Alcantara
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    Customer Support
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    Stream Global Services
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    09258550189
    </Typography>
    </Grid>
    </Grid>
    </Grid>
    </Paper>
    </Grid>
    </Grid>
    <Grid item={true} xs={12} md={2}></Grid>
        </Grid>
        </div>
);
}
export default ReferenceComponent ;
