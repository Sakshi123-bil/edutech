import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import UpcomingBatch from './UpcomingBatch';
import { Search, SearchRounded } from '@material-ui/icons';
import Session from './Session';
import { Card } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import Subscriber from './Subscriber';





const useStyles = makeStyles({
   
    root:{
     marginLeft:'10px',
     width:'110%'
     
    },
    batchlist:{
    

    },
    Search:{
        marginLeft:'4%',
        height:'30px',
        width:'520px',
       borderRadius:'3px',
       
        
    },
   
  });
  
export default function Batches() {
    const classes = useStyles();
    return(
    <div className={classes.root}>
        <h4>Batches</h4>
       <div className={classes.addBatch}>
           <Button variant="contained" color="primary">
           + Create New Batch
          </Button>
       </div>
       <h4>Batches</h4>
       <div className={classes.upcomingBatches}>
         
           <UpcomingBatch ></UpcomingBatch>
           <UpcomingBatch></UpcomingBatch>
           <UpcomingBatch></UpcomingBatch>
         
       </div>
      
       <h4>Classes</h4>
   
         <Button variant="contained" color="primary">+ Schedule class</Button>
         <TextField className={classes.Search}
          
            id="filled-basic" label="Search Class" variant="outlined" size={"small"}
            InputProps={{
                endAdornment: <IconButton size={"small"} aria-label="send"> <SearchRounded
                    fontSize={"small"}/></IconButton>
            }}/>
         
        

        
       <Session></Session>
      
    </div>
    
    );
}