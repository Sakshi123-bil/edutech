import { HomeWork } from '@material-ui/icons'
import React from 'react'
import AttemptsCard from './AttemptsCard'
import { Grid } from '@material-ui/core'
import Homework from './HomeWork'
import StudentHwList from './StudentHwList'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    margin: '0px',
    padding: '0px',
    boxSizing: 'border-box',

  },
  container: {
    display: 'flex',
    justifyContent: 'centre',

    flexWrap: 'wrap',


  },
  hw: {
    width: '70%',
  },
  chatbox: {
    width: '30%',
  },

  "@media (max-width: 1200px)": {
    chatbox: {
      marginLeft: '22px',
      width: '100%',
      marginTop: '99px',


    },
    hw: {
      width: '100%',

    },



  }

});

const FinalHw = () => {
  const classes = useStyles();
  return (

    <div className={classes.container}>
      <div className={classes.hw} >
        <Homework></Homework>
      </div>
      <div className={classes.chatbox} >
        <StudentHwList />
      </div>



    </div >
  )
}
export default FinalHw;