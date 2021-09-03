import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  root: {
    margin: '0px',
    padding: '0px',
    boxSizing: 'border-box',
    width: '100%',

    height: '180px',
    margin: '7px',

    borderRadius: '19px',
    backgroundColor: '#F3F5FA',
    "&:hover": {
      backgroundColor: 'blue',
      color: 'white'

    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
  btn1: {

    color: 'gray',
    "&:hover": {

      color: 'white',

    },

  },
  btn2: {


    color: 'gray',
    "&:hover": {

      color: 'white',

    },

  },
  CardActions: {
    marginLeft: '10px',
    paddingLeft: '10px',
  },
  buttonsection: {
    marginLeft: '70%',
    marginBottom: '-10%',
    marginTop: '-12%',

  },


});

export default function HomeworkComponent() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.hw1} >
      <Card className={classes.root} variant="elevation" elevation="0">

        <CardContent className={classes.hwbox} >
          <Typography variant="h4" component="h2" className={classes.title}>
            Homework 1
          </Typography>
          <Typography className={classes.pos}>
            Basic fregment demo app
          </Typography>
          <Typography variant="body2" component="p">
            Due date:
            <br />
            22 june 2021 11:59 pm
            <CardActions className={classes.buttonsection}>
              <DeleteIcon className={classes.btn1}></DeleteIcon>
              <EditIcon className={classes.btn2}></EditIcon>

            </CardActions>
          </Typography>
        </CardContent>

      </Card>
    </div >
  );
}

