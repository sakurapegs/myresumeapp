import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, Tabs , Tab} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {ReactComponent as Birds} from "../../../PortfolioSVG/birds.svg";
import {ReactComponent as BT} from "../../../PortfolioSVG/bt.svg";
import {ReactComponent as LogoBT} from "../../../PortfolioSVG/btTrading.svg";
import {ReactComponent as Pet} from "../../../PortfolioSVG/pet.svg";
import {ReactComponent as Rest} from "../../../PortfolioSVG/rest.svg";
import {ReactComponent as Tea} from "../../../PortfolioSVG/tea.svg";
import {ReactComponent as AJIOLogo} from "../../../PortfolioSVG/Ajio.svg";
import {ReactComponent as Ube} from "../../../PortfolioSVG/ube.svg";
import {ReactComponent as Banner4} from "../../../PortfolioSVG/banner4.svg";
import {ReactComponent as Banner1} from "../../../PortfolioSVG/banner1.svg";
import {ReactComponent as Banner2} from "../../../PortfolioSVG/Banner2.svg";
import {ReactComponent as Front} from "../../../PortfolioSVG/front.svg";
import {ReactComponent as Back} from "../../../PortfolioSVG/back.svg";
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import ContactsIcon from "@material-ui/icons/Contacts";
import CallIcon from "@material-ui/icons/Call";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from '@material-ui/icons/Home';
const useStyle = makeStyles( theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',

        height: '100%',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,

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
        height: '200%',
        boxShadow: '10px 10px 5px #888888',

    },
    image: {
        width:` 95%`,
        height: '150%',
        marginTop: '2%',
        paddingLeft: '2%',
        left: 0,
        right: 0,
        top: 0,
        backgroundPosition: 'center 100%',
    },
    box: {
        boxShadow: '2px 2px 1px #888888',
        marginLeft: '2%',
        marginRight: '2%',
        width:`100%`,
    },

    tabPanelStyle: {
        width: '100%',
        height: '190%'

    },
    boxWrapper: {
        backgroundColor: '#e6e6e6',
        width:`100%`,
        height: '190%',
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: '5%',
        paddingTop: '2%',
    },
    posterMedia: {
        width: '100%',
        height: '100%',

    },

    fontStyle: {
        display: "flex",
        paddingLeft: '2%',
        paddingRight: '2%',
        textAlign: 'center',
        color: "#6e6e6e",
        fontSize: '16px'

    },
    bannerSrc: {
        // position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: '-10px',
        width: '100%',
        height: 'auto',
        // backgroundSize: 'cover',
        backgroundPosition: 'center 100%',
    },
}))


const PortfolioComponent = () => {
    const classes = useStyle();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const TabPanel= (props) => {
        const {children, value, index, ...other} = props;

        return (
            <div
                role='tabanel'
        hidden={value !== index}
        id={'vertical-tabpanel-${index}'}
        arial-labelledby={'vertical-tab-${index}'}
        {...other}
    >
        {value === index && (
            <Box p={2}>
                <Typography>{children}</Typography>
                </Box>
        )}
        </div>
    );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    const a11yProps = (index) => {
        return {
            id: 'vertical-tab-${index}', 'aria-controls': 'vertical-tabpanel-${index}',

        };
    }

    return (
        <div className={classes.root}>
        <Grid  item={true} xs={12} container className={classes.yellowBackground}>
    <Grid item={true} xs={12} md={2}></Grid>
        <Grid item={true} xs={12} md={8} style={{paddingTop: '3%'}}>
    <Grid item={true} container>
    <Grid item={true} xs={6} md={6} style={{ color: 'white',  fontSize: "28px" }} >
    <Box flexWrap="wrap"  display="flex" justifyContent="flex-start" bgcolor="#cb0057"
    style={{ paddingLeft: '5%' }} >
    Portfolio
    </Box>
    </Grid>

    <Grid item={true} xs={6} md={6} style={{   fontSize: "28px", }} >
    <Box flexWrap="wrap"  display="flex" justifyContent="flex-end" bgcolor="#cb0057"
    style={{ paddingRight: '5%' }}>
    <Link to="/" style={{ textDecoration: 'none', color: 'white'}} >
    <HomeIcon />
    </Link>
    <Link to="/AboutMeComponent" style={{ textDecoration: 'none', color: 'white'}} >
    <AccountCircleIcon/>
    </Link>
    <Link to="/ReferenceComponent" style={{ textDecoration: 'none', color: 'white'}} >
    <ContactsIcon className={classes.iconSize}/>
    </Link>
    <Link to="/ContactComponent" style={{ textDecoration: 'none', color: 'white' }} >
    <CallIcon/>
    </Link>

    </Box>
    </Grid>
    </Grid>
    <Grid item={true} xs={12} container>
    <Paper className={classes.paper}>

    <Tabs
        orientation="vertical"
    variant="scrollable"
    value={value}
    onChange={handleChange}
    aria-label="Vertical tabs example"
    className={classes.tabs}

    >
    <Tab label="Banner" {...a11yProps(0)} />
    <Tab label="Logo" {...a11yProps(1)} />
    <Tab label="Poster" {...a11yProps(2)}/>
    <Tab label="Website" {...a11yProps(3)}/>
    </Tabs>
    <TabPanel value={value} index={0} style={{width: '100%'}}>
    <Box className={classes.boxWrapper}>
    <Grid item={true}  container>

    <Typography className={classes.fontStyle}>
        AJIO IT Solutions Facebook Banner
    </Typography>
    <Grid xs={12} md={8} style={{ alignItem: 'center', marginLeft: '20%'}}>
    <Banner1 className={classes.bannerSrc}/>
    </Grid>
    <Typography className={classes.fontStyle}>
        AJIO IT Solutions Facebook Banner
    </Typography>
    <Grid xs={12} md={8} style={{ alignItem: 'center', marginLeft: '20%'}}>
    <Banner2 className={classes.bannerSrc}/>
    </Grid>
    <Typography className={classes.fontStyle}>
        Facebook Banner for SUV Vehicles
    </Typography>
    <Grid xs={12} md={8} style={{ alignItem: 'center', marginLeft: '20%'}}>
    <Banner4 className={classes.bannerSrc}/>
    </Grid>
    </Grid>
    </Box>
    </TabPanel>
    <TabPanel value={value} index={1} style={{width: '100%'}}>
    <Box className={classes.boxWrapper}>
    <Typography variant="body1"  className={classes.fontStyle}>
        Logo is very essential and it must contain data that reflects the company's vision and
    designing logo is not that easy because you need to express the company through graphic design.
        These are some of my logo and fortunately some of it was used in my previous company AJIO IT SOLUTIONS.
    </Typography>
    <Grid item={true}  container>
    <Grid item={true}  xs={12} md={3}>
    <AJIOLogo className={classes.image}/>
    </Grid>
    <Grid item={true}   xs={12} md={3}>
    <Pet className={classes.image}/>
    </Grid>
    <Grid item={true}   xs={12} md={3}>
    <Rest className={classes.image}/>
    </Grid>
    <Grid item={true}   xs={12} md={3}>
    <LogoBT className={classes.image}/>
    </Grid>
    </Grid>
    <Grid item={true} container>
    <Grid item={true}  xs={12} md={3}>
    <Ube className={classes.image}/>
    </Grid>
    <Grid item={true}  xs={12} md={3}>
    <BT className={classes.image}/>
    </Grid>
    <Grid item={true}  xs={12} md={3}>
    <Tea className={classes.image}/>
    </Grid>
    <Grid item={true}  xs={12} md={3}>
    <Birds className={classes.image}/>
    </Grid>
    </Grid>
    </Box>
    </TabPanel>
    <TabPanel value={value}
    index={2}
    className={classes.tabPanelStyle}
    >
    <Box className={classes.boxWrapper}>
    <Typography variant="body1"  className={classes.fontStyle}>
        Posters are useful in terms of marketing. I really enjoy making posters using Adobe Illustrator and Adobe Photoshop.
        These are some of my posters for marketing purpose.

    </Typography>
    <Grid item={true} container>
    <Grid item={true} xs={12} md={2}></Grid>
        <Grid item={true} xs={12} md={4}>
    <Box className={classes.box}>
    <Front className={classes.image}/>
    </Box>
    </Grid>
    <Grid item={true} xs={12} md={4}>
    <Box className={classes.box}>
    <Back className={classes.image}/>
    </Box>
    </Grid>
    <Grid item={true} xs={12} md={2}></Grid>
        </Grid>
        </Box>
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.tabPanelStyle}>
    <Box className={classes.boxWrapper}>
    <Grid item={true} >
    <Typography variant="body1"  className={classes.fontStyle}>
        Acknowledgement:
    vector graphics used in this website are credited to https://www.vecteezy.com/.
        The website Milkyway tea is a simple website design for online business.
        I used MUI, CSS , JavaScript, React and Firebase in this project.
    </Typography>
    </Grid>
    <Grid item={true} container>
    <Grid item={true} xs={2} md={3}></Grid>
        <Grid item={true} xs={8} md={6}>
    <Link to="/MilkywayTea" style={{ textDecoration: 'none'}} >
    <Button  style={{backgroundColor: '#cb0057', width: '100%', height: '40px', color: 'white', alignItemt: 'center'}}>
    please click
    </Button>
    </Link>
    </Grid>
    <Grid item={true} xs={2} md={3}></Grid>
        </Grid>
        </Box>
        </TabPanel>
        </Paper>
        </Grid>
        </Grid>
        <Grid item={true} xs={12} md={2}></Grid>
        </Grid>
        </div>
);
}
export default PortfolioComponent ;