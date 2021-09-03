import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core';
import { DeleteOutline, PlayArrow, PlayArrowOutlined, PlayCircleFilled, PlayForWorkOutlined } from '@material-ui/icons';


const useStyles = makeStyles({
   root:{
       display:'flex',
       backgroundColor:'#DCDCDC',
       width:'70%',
       marginTop:'2%',
       borderRadius:'5px',
       height:'85px',
       "&:hover": {

        color:'white',
        backgroundColor:'blue'
  
      },
   },
   SessionContent:{
       margin:'2%',
       marginLeft:'2%',
       marginRight:'12%'

   },
   btn:{
      marginRight:'4px'
   }
 });

 export default function Session() {
    const classes = useStyles();
    return(
       <div className={classes.root}>
           <div className={classes.SessionContent}>
              <Typography>Session:27</Typography>
              <Typography>Practice Session</Typography>
           </div>
           <div className={classes.SessionContent}>
               <Typography>Duration:60 Min</Typography> 
               <Typography> 22 jun,2021 11:59 PM</Typography>
           </div>
           <div className={classes.SessionContent}>
               <Button variant="contained" color="primary" className={classes.btn}><PlayArrow></PlayArrow></Button>
               <Button variant="contained" color="secondary" className={classes.btn}><DeleteOutline></DeleteOutline></Button>
           </div>

       </div>
    );
}