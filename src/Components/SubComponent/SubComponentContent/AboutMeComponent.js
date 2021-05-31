import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {ReactComponent as AboutMe} from "../../../SVG/about.svg";
import ContactsIcon from "@material-ui/icons/Contacts";
import CallIcon from "@material-ui/icons/Call";
import AppsIcon from "@material-ui/icons/Apps";
import {Link} from "react-router-dom";
import Box from "@material-ui/core/Box";
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
        width: '100%',
        height: '400px',
        display: 'flex'
    },
    paper: {
        // opacity: '100%'
        paddingTop:'10%',
        display: 'flex',
        width: '100%',
        height: '100%',
        boxShadow: '10px 10px 5px #888888',
        justifyItems: 'center',
        // alignItems: 'center',
        // direction: 'column',
    },
    vertical: {
        display: 'flex',
        paddingBottom:'1%',
        paddingTop:'1%',
        // paddingLeft: '2%',
        fontSize: "28px",
        color: 'white',
        verticalAlign: "middle",
        fontFamily: 'trebuchet MS',
        background:  '#ff9f1a'

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },

}))


const AboutMeComponent = () => {
    const classes = useStyle();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            <Grid  container className={classes.yellowBackground}>
    <Grid md={2} item={true} ></Grid>
        <Grid item={true}  md={8} style={{paddingTop: '3%'}}>
    <Grid item={true}  container>
    <Grid item={true} xs={6} md={6} style={{ color: 'white',  fontSize: "28px" }} >
    <Box flexWrap="wrap"  display="flex" justifyContent="flex-start" bgcolor="#ff9f1a"
    style={{ paddingLeft: '5%' }} >
    About Me
    </Box>
    </Grid>

    <Grid item={true} xs={6} md={6} style={{   fontSize: "28px", }} >
    <Box flexWrap="wrap"  display="flex" justifyContent="flex-end" bgcolor="#ff9f1a"
    style={{ paddingRight: '5%' }}>
    <Link to="/" style={{ textDecoration: 'none', color: 'white'}} >
    <HomeIcon />
    </Link>
    <Link to="/PortfolioComponent" style={{ textDecoration: 'none', color: 'white' }} >
    <AppsIcon/>
    </Link>
    <Link to="/ReferenceComponent" style={{ textDecoration: 'none', color: 'white'}} >
    <ContactsIcon/>
    </Link>
    <Link to="/ContactComponent" style={{ textDecoration: 'none', color: 'white'}} >
    <CallIcon/>
    </Link>
    </Box>
    </Grid>
    </Grid>


    <Paper className={classes.paper}>
    <Grid item={true} container>

    <Grid item={true} md={5}>
    <Typography style={{color: "#2F4F4F",  marginLeft: '10%', paddingBottom: '8%'}}
    variant="h5">
        Peggy Siamoc
    </Typography>
    <Typography style={{color: "#708090",  marginLeft: '10%'}}
    variant="h5">
        Personal Informations
    </Typography>
    <Typography variant="body1" style={{color: "grey", marginLeft: '10%'}} fontStyle="normal">
        <Typography>
            {bull} Gender : Female
    </Typography>
    <Typography>
    {bull} Date of Birth	: October 28, 1987
    </Typography>
    <Typography>
    {bull} Nationality : Filipino
    </Typography>
    <Typography>
    {bull} Status : Married
    </Typography>
    <Typography>
    {bull} Language : English, Japanese and Tagalog
    </Typography>
    </Typography>

    <Typography style={{color: "#708090",  marginLeft: '10%', paddingTop: '4%'}}
    variant="h5">
        Summary of Qualifications
    </Typography>
    <Typography variant="body1" style={{color: "grey", marginLeft: '10%'}} fontStyle="normal">
        <Typography>
            {bull} Knowledgeable in React, JavaScript, Bootstrap, Material-UI
    </Typography>
    <Typography>
    {bull} Knowledgeable in Firebase and MySQL
    </Typography>
    <Typography>
    {bull} Knowledgeable in Adobe Suites (Photoshop, Illustrator)
    </Typography>
    <Typography>
    {bull} Versatile and multi-skilled person
    </Typography>
    <Typography>
    {bull} The ability to manage time and meet deadlines
    </Typography>
    <Typography>
    {bull} Basic Knowledge in Nihongo.
    </Typography>
    </Typography>
    </Grid>
    <Grid item={true} md={7}> <AboutMe className={classes.media}/></Grid>
    <Grid  item={true} md={12}>
    <Typography style={{color: "#708090", marginLeft: '5%'}}
    variant="h5">
        Work Experience
    </Typography>
    <Grid item={true} container  style={{color: "grey", marginLeft: '5%', paddingTop: '2%'}}>
    <Grid item={true} md={2}>
        <Typography>
            AJIO IT Solutions
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '15px'}}>
    Web Developer
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    August 2019 - October 2020
    </Typography>
    </Grid>
    <Grid item={true} md={2}>
        <Typography>
            Bayside English School
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '15px'}}>
    Graphic Designer
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    June 2016 - August 2017
    </Typography>
    </Grid>
    <Grid item={true} md={2}>
        <Typography>
            Fresh Company
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '15px'}}>
    Technical Intern Trainee
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    February 2015 – February 2016
    </Typography>
    </Grid>
    </Grid>
    </Grid>
    <Grid item={true} container  style={{color: "grey", marginLeft: '5%'}}>
    <Grid md={2} item={true} >
        <Typography>
            Stream Global Services
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '15px'}}>
    Professional Customer Support
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    July 2012 - September 2014
    </Typography>
    </Grid>
    <Grid md={2} style={{marginLeft: '1%'}}>
    <Typography>
        RegentPacific College
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '15px'}}>
    IT Technical Support
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    September 2011 – November  2011
    </Typography>
    </Grid>
    <Grid item={true} md={2} style={{marginLeft: '1%'}}>
    <Typography>
        Tambuli Beach Resort
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '15px'}}>
    Pantry/Food Attendant
    </Typography>
    <Typography style={{fontFamily: 'FreeMono', fontSize: '12px'}}>
    December 2005 – June  2011
    </Typography>
    </Grid>

    </Grid>
    </Grid>
    </Paper>
    </Grid>
    <Grid md={2} item={true} ></Grid>
        </Grid>
        </div>
);
}
export default AboutMeComponent;