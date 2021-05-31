import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid} from "@material-ui/core";
import { ReactComponent as Profile} from "../../SVG/peggy.svg";
import {Typography,} from "@material-ui/core";
import SecondaryComponent from "../SubComponent/SecondaryComponent";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Resume from "../../../src/PortfolioSVG/Resume.pdf"

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    yellowPaper: {
        backgroundColor: '#F7B008',
        borderRadius: '0% 0% 394% 0%',
        width: '50%',
        height: '100%',
    },
    media: {
        height: "100%",
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    box: {
        width: '95%',
        justifyContent: "center",
        backgroundColor: '#DCDCDC',
        height: '400px',
        boxShadow: '10px 10px 5px #888888',
    }


}));


const MainComponent = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid>
                <Paper>
                    <Grid container>
        <Grid item={true} xs={12} md={6} className={classes.yellowPaper}>
    <Profile className={classes.media}/>
    </Grid>
    <Grid item={true} xs={12} md={6}>
    <Card className={classes.box}>
    <CardContent>
        <Typography style={{color: "black", textAlign: 'center'}}
    variant="h4">
        Curriculum Vitae
    </Typography>
    <Typography style={{color: "grey", textAlign: 'center', fontFamily: 'Brush Script Std'}} variant="h2">
        Peggy Siamoc
    </Typography>
    <Typography style={{color: "black", textAlign: 'center', fontSize: '15px'}}>
    " Only those who risk going too far can possibly find out how far one can go". —T.S. Eliot
    </Typography>

    <Typography style={{color: "grey", textAlign: 'center', fontSize:'14px'}}>
    Talented designer and web developer with strong problem-solving skills. Seeking to utilize my practical knowledge in React.
        Coming with attitude and hunger for learning with a year of React programming experience.
    </Typography>
    <Grid
    style={{width: '80%', height: '50px'}}
>
    <SecondaryComponent/>
    </Grid>
    </CardContent>
    </Card>
    <Grid item={true} container>
    <Button variant="contained"
    href={Resume}
    download="Resume.pdf"
    style={{backgroundColor: '#ff9f1a', width: '95%', height: '50px', marginTop: '10px'}}>
    Download CV
    </Button>
    </Grid>
    </Grid>
    </Grid>

    </Paper>
    <Grid item={true} container>
    </Grid>
    <Grid item={true} style={{backgroundColor: "white", height: '2px'}}></Grid>
    <Grid item={true} style={{backgroundColor: "#C0C0C0", height: '10px'}}></Grid>
    </Grid>
    </div>

);
}
export default MainComponent;




