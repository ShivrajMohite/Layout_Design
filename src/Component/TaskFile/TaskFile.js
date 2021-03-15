import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import city_img from '../../img.jpg';
import user_img from '../../user_img.jpg';

const useStyles = theme => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: '20px',
      textAlign: 'center',
    //   color: theme.palette.text.secondary,
      backgroundColor:'#6C7A89',
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
      width:'50px',
      marginLeft: '20px'
    },

    white_paper: {
        padding: '20px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
        width:'70px',
        marginLeft: '20px',
        height:'70px'
    },
    max_paper: {
        padding: '20px',
        textAlign: 'center',
      //   color: theme.palette.text.secondary,
        backgroundColor:'#6C7A89',
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
        width:'100%',
        height:'100%',
        marginLeft: '20px'
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
    company_adv: {
        fontSize: '35px',
        fontWeight: 'bold'
    },
    adv_company: {
        backgroundColor: '#EEEEEE',
        paddingTop: '40px',
        paddingBottom: '40px'
    },
    in_div: {
        marginLeft:'20px',
        marginRight:'20px'
    },
    card_div: {
        marginLeft:'20px',
        marginRight:'20px',
        marginBottom:'20px',
        marginTop:'50px'
    },
    p_tag: {
        marginBottom:'40px'
    },
    avtar_div: {
        // position: 'absolute',
        top: '430px',
        left: '104px',
    },
    avtar: {
        width: '200px',
        height: '200px',
        /* border-radius: 50%; */
        /* width: 200px; */
        /* border-radius: 50%; */
        position: 'absolute',
        top: '430px',
        left: '104px',
    },
    followers: {
        position: 'absolute',
        top: '465px',
        left: '700px',
        fontSize:'25px'
    },
    following: {
        position: 'absolute',
        top: '465px',
        left: '1000px',
        fontSize:'25px'
    },
    name : {
        position: 'absolute',
        top: '190px',
        color: 'white',
        fontSize: '47px',
        zIndex: 1,
        left: '49px',
    },
    designation: {
        position: 'absolute',
        top: '258px',
        color: 'white',
        fontSize: '25px',
        zIndex: 1,
        left: '49px',
        fontWeight: 'bold',
    },
    p1: {
        position: 'absolute',
        top: '690px',
        zIndex: 1,
        left: '40px',
        fontSize: '18px'
    },
    p2: {
        position: 'absolute',
        top: '760px',
        zIndex: 1,
        left: '40px',
        right:'20px',
        fontSize: '18px'
    }
});

// const classes = useStyles();

const cardStyle = {
    height: '30vh',
    backgroundColor:'#EEEEEE'
}

class LayoutTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {
        const { classes } = this.props;
        // const classes = useStyles();
        return (
            <div >
                <div>
                    <p className={classes.name}>Hugh Jackman</p>
                    <p className={classes.designation}>ACTOR PRODUCER</p>

                    <img src={city_img} className="img_class" ></img>
                    <div className="first_div"></div>

                    <div className={classes.avtar_div}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Avatar src={user_img} className={classes.avtar}></Avatar>
                            </Grid>
                            <Grid direction="column" item xs={3} className={classes.followers}>
                                <p>Followers</p>
                                <p style={{fontWeight:'bold'}}>3.5K</p>
                            </Grid>
                            <Grid direction="column" item xs={3} className={classes.following}>
                                <p>Following</p>
                                <p style={{fontWeight:'bold'}}>1.9K</p>
                            </Grid>
                        </Grid>
                    </div>

                    <p className={classes.p1}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. </p>

                    <p className={classes.p2}>Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                    
                </div>
                <div className={classes.card_div}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <h4>DOLOR FIT FOR</h4>
                        </Grid>
                        <Grid item xs={4}>
                            <h4>PERMOS DOLOROS</h4>
                        </Grid>
                        <Grid item xs={4}>
                            <h4>GOREMINOT BIRJU</h4>
                        </Grid>

                        {/* CARD */}
                        <Grid item xs={4}>
                            <Card style={cardStyle}>
                                <CardContent></CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={cardStyle}>
                                <CardContent></CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={cardStyle}>
                                <CardContent></CardContent>
                            </Card>
                        </Grid>

                        {/* TEXT */}
                        <Grid item xs={4}>
                            <p> Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
                        </Grid>
                        <Grid item xs={4}>
                            <p> Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. </p>
                        </Grid>
                        <Grid item xs={4}>
                            <p> Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
                        </Grid>
                    </Grid>
                </div>
                
                <div className={classes.adv_company}>
                    <div className={classes.in_div}>
                        <p className={classes.p_tag}>
                            <span className={classes.company_adv}>COMPANY ADVANTAGE</span>
                            <span style={{float:'right', display:'flex'}}>
                                <Paper className={classes.paper}></Paper>
                                <Paper className={classes.paper}></Paper>
                                <Paper className={classes.paper}></Paper>
                            </span>
                        </p>

                        <Grid 
                            // justify="center"
                            // alignItems="center"
                            container spacing={3}
                        >
                            
                            <Grid container 
                            // spacing={3} 
                            direction="column" item xs={1}>
                                <Paper className={classes.white_paper}></Paper>
                                <Paper className={classes.white_paper}></Paper>
                                <Paper className={classes.white_paper}></Paper>
                            </Grid>

                            <Grid container 
                            // spacing={3} 
                            direction="column" item xs={3}>
                                <h5>DOLOR FI BOR</h5>
                                <p>Paragraphs are the building blocks of papers.</p>

                                <h5>DOLOR FI BOR</h5>
                                <p>Paragraphs are the building blocks of papers.</p>

                                <h5>DOLOR FI BOR</h5>
                                <p>Paragraphs are the building blocks of papers.</p>
                            </Grid>

                            <Grid container 
                            // spacing={3} 
                            direction="column" item xs={1}>
                                <Paper className={classes.white_paper}></Paper>
                                <Paper className={classes.white_paper}></Paper>
                                <Paper className={classes.white_paper}></Paper>
                            </Grid>

                            <Grid container 
                            // spacing={3} 
                            direction="column" item xs={3}>
                                <h5>DOLOR FI BOR</h5>
                                <p>Paragraphs are the building blocks of papers.</p>

                                <h5>DOLOR FI BOR</h5>
                                <p>Paragraphs are the building blocks of papers.</p>

                                <h5>DOLOR FI BOR</h5>
                                <p>Paragraphs are the building blocks of papers.</p>
                            </Grid>

                            <Grid container item xs={4}>
                                <Paper className={classes.max_paper}></Paper>
                            </Grid>

                        </Grid>
                    </div>
                    
                </div>
            </div>

        )
    }

}

export default withStyles(useStyles) (LayoutTask);