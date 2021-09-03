import { Card, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
   root:{
       display:'flex',
       width:'70%',
       backgroundColor:'#DCDCDC',
       marginBottom:'1%',
       "&:hover": {

        color: 'white',
        backgroundColor:'blue'
  
      },
      
   },
   batchDetails:{
     marginLeft:'10%',
     marginRight:'5%',
     marginTop:'3%',
    
     

   },
   course:{
    marginTop:'3%',
    marginBottom:'2%',
    marginLeft:'2%'
   },
   editbtn:{
    marginLeft:'10%',
    marginRight:'8%',
    marginTop:'2%',
    backgroundColor:'blue',
    height:'30px',
    "&:hover": {

        color:'black',
        backgroundColor:'white'
  
      },
   }
});

export default function UpcomingBatch() {
    const classes = useStyles();
    return(
            <Card className={classes.root}>
                <div className={classes.course}>
                <Typography>1 st Batch</Typography>
                <Typography>java Core</Typography>
                </div>
                
                <Typography className={classes.batchDetails}>22 jun,2021 11:59</Typography>
                <Typography className={classes.batchDetails}>Marks:10</Typography>
                <Button variant="contained" color="primary" className={classes.editbtn} size="small">
                   Edit
              </Button>
            </Card>
    )
}