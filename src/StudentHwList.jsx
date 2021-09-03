import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { List } from '@material-ui/core';
import { useState } from 'react';
import { ListItemText } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import AttemptsCard from './AttemptsCard';
import { ListItemAvatar } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'
import { Divider } from '@material-ui/core';





const useStyles = makeStyles({
  root: {
    margin: '0px',
    padding: '0px',
    boxSizing: 'border-box',
    backgroundColor: '#F3F5FA',
    width: '90%',
    border: '2px solid black',
    overflowY: 'scroll',
    height: '800px'

  },
  expand: {

    width: '100%',
  },
  studentInfo: {

  },
  expandCard: {
    display: 'block'
  },


  expandText: {
    display: 'flex',
    justifyContent: 'spaceevenly',
    alignItems: 'center',
    cursor: 'pointer'
  },

  chatboxx: {
    width: '100 %',
  },
  exinfo: {
    width: '40%',

    paddingRight: '12px',
  },
  expicon: {
    width: '20%',

    margin: '12px',
  },


});




export default function StudentHwList() {

  const [isStudentClickedOne, updateOne] = useState(false);
  const [isStudentClickedTwo, updateTwo] = useState(false);
  const [isStudentClickedThree, updateThree] = useState(false);

  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem className={classes.chatboxx}>

        <div className={classes.expand}>

          <Avatar></Avatar>
          <div className={classes.expandText} onClick={() => updateOne(!isStudentClickedOne)}>

            <ListItemText primary="kaml patil" secondary="kamalpatil@123gmail.com" />
            <ListItemText secondary="Checked" primary="Jan 9, 2014" className={classes.studentInfo} />
          </div>

          <div>
            {isStudentClickedOne && <AttemptsCard></AttemptsCard>}
          </div>

        </div>
      </ListItem>
      <ListItem className={classes.chatboxx}>

        <div className={classes.expand}>

          <Avatar></Avatar>
          <div className={classes.expandText} onClick={() => updateTwo(!isStudentClickedTwo)}>

            <ListItemText primary="kaml patil" secondary="kamalpatil@123gmail.com" />
            <ListItemText secondary="Checked" primary="Jan 9, 2014" className={classes.studentInfo} />
          </div>

          <div>
            {isStudentClickedTwo && <AttemptsCard></AttemptsCard>}
          </div>
        </div>
      </ListItem>
      <ListItem className={classes.chatboxx}>

        <div className={classes.expand}>

          <Avatar></Avatar>
          <div className={classes.expandText} onClick={() => updateThree(!isStudentClickedThree)}>

            <ListItemText primary="kaml patil" secondary="kamalpatil@123gmail.com" />
            <ListItemText secondary="Checked" primary="Jan 9, 2014" className={classes.studentInfo} />
          </div>

          <div>
            {isStudentClickedThree && <AttemptsCard></AttemptsCard>}
          </div>

        </div>
      </ListItem>
    </List>
  );
}