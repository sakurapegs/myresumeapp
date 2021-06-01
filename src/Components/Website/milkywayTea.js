import React, {useContext, useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ReactComponent as Barista} from "../../PortfolioSVG/barista.svg";
import {ReactComponent as Banner} from "../../PortfolioSVG/banner.svg";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import DeleteIcon from "@material-ui/icons/Delete";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ButtonBase from "@material-ui/core/ButtonBase";
// import Login from "./Authentication/Login";
// import Profile from "./Authentication/Profile";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'absolute',
        height: '100%',
    },
    root2: {
        width: '100%',
        paddingTop: '2%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    websiteHeading: {
        width: '50%',
        height: '250px',
    },
    imageRoot: {
        display: 'absolute',
        flexWrap: 'wrap',
        width: '50px',
    },
    image: {
        paddingLeft: '2%',
        height: '400px',
        [theme.breakpoints.down('xs')]: {
            width: '100% !important',
            height: '400px',
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.55,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
            '& $imagePrice': {
                opacity: 2,
                color: theme.palette.common.white,
            }
        },
    },
    imagePrice: {
        color: theme.palette.common.black,
        position: 'absolute',
        bottom: -1,
        left: 'calc(50% -10px)',
        fontSize: '23px'
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    bannerSrc: {
        left: 0,
        right: 0,
        top: 0,
        bottom: '-10px',
        width: '100%',
        height: 'auto',
        backgroundPosition: 'center 100%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.10,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(5)}px ${theme.spacing(1) + 35}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.black,
        position: 'absolute',
        bottom: -32,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    h2Front: {
        marginTop: '2%',
        paddingTop: '12%',
        color: '#16bba9',
        textAlign: 'center'
    },
    subTitle: {
        textAlign: 'center',
        paddingRight: '5%',
        paddingLeft: '5%',
        fontFamily: 'Cursive'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[2],
        padding: theme.spacing(2, 4, 3),
    },
    modalField: {
        paddingBottom: '1px',
        display: 'flex',
        alignContent: 'center'
    },
    cartStyle: {
        marginLeft: '2px',
        color: "#C71585"
    }
}));



const imagesTea = [
    {
        id: '0',
        name: 'lime',
        url: "https://sakurapegs.github.io/myresumeapp/lime.svg",
        title: 'Lime',
        width: '40%',
        price: '$5.00',
        amount: '2',
    },
    {
        id: '1',
        name: 'blueberry',
        url: "https://sakurapegs.github.io/blueberry.svg",
        title: 'Blueberry',
        width: '40%',
        price: '$8.00',
        amount: '2',
    },
    {
        id: '2',
        name: 'mocha',
        url: "https://sakurapegs.github.io/mocha.svg",
        title: 'Mocha',
        width: '40%',
        price: '$5.00',
        amount: '2',
    },
    {
        id: '3',
        name: 'macha',
        url: "https://sakurapegs.github.io/myresumeapp/macha.svg",
        title: 'Macha',
        width: '40%',
        price: '$8.00',
        amount: '2',
    },
    {
        id: '4',
        name: 'bubblegum',
        url: "https://sakurapegs.github.io/bubble_gum.svg",
        title: 'Bubble Gum',
        width: '40%',
        price: '$5.00',
        amount: '2',
    },
    {
        id: '5',
        name: 'pomelo',
        url: "https://sakurapegs.github.io/pomelo.svg",
        title: 'Pomelo',
        width: '40%',
        price: '$5.00',
        amount: '2',
    },
    {
        id: '6',
        name: 'strawberry',
        url: "https://sakurapegs.github.io/strawberry.svg",
        title: 'Strawberry',
        width: '40%',
        price: '$8.00',
        amount: '2',
    },
    {
        id: '7',
        name: 'chocotea',
        url: "https://sakurapegs.github.io/ChocoTea.svg",
        title: 'Choco Tea',
        width: '40%',
        price: '$8.00',
        amount: '2',
    }
]

const MilkywayTea = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal
                className={classes.modal}
    open={open}
    onClose={handleClose}
    BackdropComponent={Backdrop}
    BackdropProps={{
        timeout: 500,
    }}
>
    <Fade in={open}>
    <div className={classes.paper}>
        {/*<Login/>*/}
        <Typography>
        Sorry! Currently developing the page.
    </Typography>
    </div>
    </Fade>
    </Modal>

    <Grid xs={12} md={12} item={true}  style={{display: 'flex', width: '150%', justifyContent: 'center'}}>
    <Banner className={classes.bannerSrc}/>
    </Grid>
    <Grid container>
    <Grid xs={12} md={1} item={true}></Grid>
        <Grid xs={12} md={6} item={true}>
    <Grid xs={12} md={12}>
        {imagesTea.map((tea) => (
                <ButtonBase
                    type="submit"
            focusRipple
            key={tea.id}
            onClick={handleOpen}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
        width: tea.width,
            marginLeft: '4%',
            marginRight: '4%',
            marginBottom: '2%',
            marginTop: '2%',
            boxShadow: '8px 8px 4px #888888'

    }}
>
    {/*{!amountIsValid && <p> Please enter a valid amount (1-5).</p>}*/}
    <span
        className={classes.imageSrc}
    style={{
//         backgroundImage: "https://sakurapegs.github.io(${tea.url})`,
           backgroundImage: `url(${tea.url})`,
    }}
    />
    <span className={classes.imageBackdrop}/>
    <span className={classes.imageButton}>
    <Typography
        component="span"
    variant="subtitle1"
    color="inherit"
    className={classes.imageTitle}
        >
        {tea.title}
        </Typography>
        <Typography className={classes.imagePrice}>
        {tea.price}
        </Typography>
        </span>
        </ButtonBase>
))}
    </Grid>
    </Grid>
    <Grid xs={12} md={4} className={classes.root2} item={true} >
    <Box>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
    aria-controls="panel1a-content"
    id="panel1a-header"
    >
    <Typography className={classes.heading}>Order Summary</Typography>
    <Typography className={classes.cartStyle}> <ShoppingCartIcon/></Typography>
    {/*<Typography className={classes.cartStyle}> {numberOfCartItems}</Typography>*/}
    </AccordionSummary>
    <AccordionDetails>
    <Grid xs={12} md={10} item={true} >
        {/*context*/}
    {/*  <MilkTeaSummaryCart/>*/}
    {/*{listItem.map((tea) => (*/}
    {/*    <li key={tea.id}>*/}
    {/*        {tea.name}</li>*/}
    {/*))}*/}
    </Grid>
    </AccordionDetails>
    </Accordion>
    <Accordion>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
    aria-controls="panel2a-content"
    id="panel2a-header"
    >
    <Typography className={classes.heading}>Profile</Typography>
        </AccordionSummary>
        <AccordionDetails style={{display: 'inline', color: 'gray'}}>

    {/*//user info*/}
    </AccordionDetails>
    </Accordion>
    {/*{hasItems &&*/}
    <Button
        variant="contained"
    color="secondary"
    style={{width: '100%', height: '60px',  position: 'relative'}}
    onClick={handleOpen} // need to create condition this will be disable if no order clicked
        >
        Place Order
    </Button>
    {/*}*/}
    <Grid xs={6} md={10} item={true} >
    <Typography variant="h5" className={classes.h2Front}>
        Lime Tea $5.00
    </Typography>

    <Typography variant="subtitle1" className={classes.subTitle}>
        Lorem ipsum dolor sit amet, consectetur
    sit amet blandit leo lobortis eget.
    </Typography>
    <Typography variant="h5" className={classes.h2Front}>
        Blueberry Tea $8.00
    </Typography>
    <Typography variant="subtitle1" className={classes.subTitle}>
        Lorem ipsum dolor sit amet, consectetur
    sit amet blandit leo lobortis eget.
    </Typography>
    <Typography variant="h5" className={classes.h2Front}>
        Mocha Tea $5.00
    </Typography>
    <Typography variant="subtitle1" className={classes.subTitle}>
        Lorem ipsum dolor sit amet, consectetur
    sit amet blandit leo lobortis eget.
    </Typography>
    <Typography variant="h5" className={classes.h2Front}>
        Macha Tea $8.00
    </Typography>
    <Typography variant="subtitle1" className={classes.subTitle}>
        Lorem ipsum dolor sit amet, consectetur
    sit amet blandit leo lobortis eget.
    </Typography>
    <Typography variant="h5" className={classes.h2Front}>
        Bubblegum Tea $5.00
    </Typography>
    <Typography variant="subtitle1" className={classes.subTitle}>
        Lorem ipsum dolor sit amet, consectetur
    sit amet blandit leo lobortis eget.
    </Typography>
    <Typography variant="h5" className={classes.h2Front}>
        Pomelo Tea $5.00
    </Typography>
    <Typography variant="subtitle1" className={classes.subTitle}>
        Lorem ipsum dolor sit amet, consectetur
    </Typography>
    </Grid>
    {/*<Profile/>*/}
    <Grid>
        <Barista style={{display: 'flex', width: '150%', justifyContent: 'flex-end'}}/>
    </Grid>
    </Box>
    </Grid>
    <Grid xs={12} md={1} item={true} ></Grid>
        </Grid>
        <Grid xs={12} md={12} style = {{backgroundColor: '#16bba9', height: '100px', position: 'relative', justifyContent: 'flex-end'}}>
    </Grid>
    </div>
);
}
export default MilkywayTea;
