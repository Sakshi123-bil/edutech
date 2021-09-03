import React from 'react'
import HomeworkComponent from './HomeworkComponet'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '0px',
    padding: '0px',
    boxSizing: 'border-box',


  },


  title: {
    fontSize: 14,

  },
  pos: {
    marginBottom: 12,
  },
  card: {
    width: '250px',


    margin: '7px',


  },
  cardshow: {
    margin: '13px',

    display: 'flex',
    justifyContent: 'space-evenly',


    flexWrap: 'wrap',


  },




  heading: {
    fontWeight: 'bold',
    marginLeft: '10px',
    marginBottom: '30px',
    marginTop: '30px'

  },
  heading2: {
    fontWeight: 'bold',
    marginLeft: '10px',
    marginTop: '30px'

  },
  addhomework: {
    fontSize: '25px',
    backgroundColor: 'blue',
    color: 'white',
    width: '30%',
    textAlign: 'center',
    marginLeft: '10px',
    padding: '8px',
    borderRadius: '10px',
    marginBottom: '30px',

  },


  "@media (max-width: 720px)": {
    addhomework: {

      width: '70%',
    },
    card: {
      width: '100%',



    },




  }
});
export default function Homework() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Typography variant="h5" component="h2" className={classes.heading}>Homework</Typography>
      <Typography className={classes.addhomework}> + New Homework</Typography>
      <Typography variant="h5" component="h2" className={classes.heading2} >Homeworks</Typography>
      <div className={classes.cardshow}>
        <Typography className={classes.card}><HomeworkComponent></HomeworkComponent></Typography>
        <Typography className={classes.card}><HomeworkComponent></HomeworkComponent></Typography>
        <Typography className={classes.card}><HomeworkComponent></HomeworkComponent></Typography>


        <Typography className={classes.card}><HomeworkComponent></HomeworkComponent></Typography>
        <Typography className={classes.card}><HomeworkComponent></HomeworkComponent></Typography>
        <Typography className={classes.card}><HomeworkComponent></HomeworkComponent></Typography>


        <Typography className={classes.card}><HomeworkComponent></HomeworkComponent></Typography>
        <Typography className={classes.card}><HomeworkComponent></HomeworkComponent></Typography>
        <Typography className={classes.card}><HomeworkComponent></HomeworkComponent></Typography>
      </div>
    </div>
  );
}
